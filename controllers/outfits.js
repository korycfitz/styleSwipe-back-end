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
    res.status(201).json(blog)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  create,
}

