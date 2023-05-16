import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  outfits: [{ type: Schema.Types.ObjectId, ref: 'Outfit' }],
  mySwipes: [{ type: Schema.Types.ObjectId, ref: 'Swipe'}]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
