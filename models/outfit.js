import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'Profile' },
    content: {
      type: String,
      required: true
    },
    likes: { 
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

const outfitSchema = new Schema(
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