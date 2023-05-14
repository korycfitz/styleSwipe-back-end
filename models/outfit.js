import mongoose from 'mongoose'

const Schema = mongoose.Schema

const blogSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String
    },
    author: { type: Schema.Types.ObjectId, ref: 'Profile' },
    comments: [commentSchema],
    swipes: { type: [Schema.Types.ObjectId], ref: 'Swipe'}
  },
  { timestamps: true }
)

const Outfit = mongoose.model('Outfit', outfitSchema)

export { Outfit }