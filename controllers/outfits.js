import { Profile } from "../models/profile.js"
import { Outfit } from "../models/outfit.js"

async function create(req, res) {
  try {
    req.body.author = req.user.profile
    const outfit = await Outfit.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { outfits: outfit } },
      { new: true }
    )
    outfit.author = profile
    res.status(201).json(outfit)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function index(req, res) {
  try {
    const outfits = await Outfit.find({})
      .populate('author')
      .sort({ createdAt: 'desc' }) //will need to change how we display them
      res.status(200).json(outfits)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  create,
  index,
}