import mongoose from 'mongoose'

const Schema = mongoose.Schema

const swipeSchema = new Schema({
  swipedBy: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  swipe: {
    type: String,
    default: 'noVote',
    enum: ['slay', 'nay', 'noVote'],
  },
  outfit: {
    type: Schema.Types.ObjectId,
    ref: 'Outfit'
  }
},{
  timestamps: true,
})

const Swipe = mongoose.model('Swipe', swipeSchema)

export { Swipe }