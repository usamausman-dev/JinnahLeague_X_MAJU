import mongoose, { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  username: String,
  email: String,
  password: String
})

const Users = models.user || model('user', userSchema);
export default Users


const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
      },
      rating: Number,
      comment: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Restaurant = models.restaurant || model('restaurant', restaurantSchema);





