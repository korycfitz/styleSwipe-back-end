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
    .sort({ createdAt: 'desc' })
    res.status(200).json(outfits)
  } catch (error) {
    console.log(error)
    res.status(500).json(error) 
  }
}

async function show(req, res) {
  try {
    const outfit = await Outfit.findById(req.params.outfitId)
    .populate(['author', 'comments.author'])
    res.status(200).json(outfit)
  }catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const outfit = await Outfit.findByIdAndUpdate(
      req.params.outfitId,
      req.body,
      { new: true }
    ).populate('author')
    res.status(200).json(outfit)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function createComment(req, res) {
  try {
    req.body.author = req.user.profile
    const outfit = await Outfit.findById(req.params.outfitId)
    outfit.comments.push(req.body)
    await outfit.save()
    const newComment = outfit.comments[outfit.comments.length - 1]
    const profile = await Profile.findById(req.user.profile)
    newComment.author = profile
    res.status(201).json(newComment)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteOutfit(req, res) {
  try {
    const outfit = await Outfit.findByIdAndDelete(req.params.outfitId)
    const profile = await Profile.findById(req.user.profile)
    profile.outfits.remove({_id: outfit._id})
    await profile.save()
    res.status(200).json(outfit)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteComment(req, res) {
  try {
    const outfit = await Outfit.findById(req.params.outfitId)
    outfit.comments.remove({ _id: req.params.commentId})
    await outfit.save()
    res.status(200).json(outfit)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  create,
  index,
  show,
  update,
  createComment,
  deleteOutfit as delete,
  deleteComment,
}