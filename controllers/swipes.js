import { Profile } from "../models/profile.js"
import { Outfit } from "../models/outfit.js"
import { Swipe } from "../models/swipe.js"


async function create(req, res) {
  try {
    console.log(req.user)
    req.body.swipedBy = req.user.profile
    const swipe = await Swipe.create(req.body)
    const outfit = await Outfit.findByIdAndUpdate(req.user.outfitId)
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
  
}

async function show(req, res) {
  
}

export {
  create,
  update,
  index,
  show,
}