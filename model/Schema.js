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
    unique: true,
  },
  numOfTable: {
    type: Number,
    required: true,
  },
  admin: {
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




const reservationSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  NumOfPeople: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  specialRequests: {
    type: String,
  },
});

export const Reservation = mongoose.model('Reservation', reservationSchema);


const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Order = mongoose.model('Order', orderSchema);









