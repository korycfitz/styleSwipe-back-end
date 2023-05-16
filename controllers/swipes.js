import { Profile } from "../models/profile.js"
import { Outfit } from "../models/outfit.js"
import { Swipe } from "../models/swipe.js"

async function create(req, res) {
  try {
    req.body.swipedBy = req.user.profile
    const swipe = await Swipe.create(req.body)
    const outfit = await Outfit.findByIdAndUpdate(
      req.params.outfitId,
      { $push: { swipes: swipe } },
      { new: true }
    )
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { mySwipes: swipe } },
      { new: true }
    )
    swipe.swipedBy = profile
    res.status(201).json(swipe)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {

}

async function index(req, res) {
  try {
    const swipes = await Swipe.find({})
    .sort({ createdAt: 'desc' })
    res.status(200).json(swipes)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const swipe = await Swipe.findById(req.params.swipeId)
    .populate('swipedBy')
    res.status(200).json(swipe) 
  }catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  create,
  update,
  index,
  show,
}