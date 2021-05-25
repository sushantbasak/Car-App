const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
  st_point: {
    type: String,
    required: true,
    trim: true,
  },
  end_point: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  payment_status: {
    type: Boolean,
    default: false,
    trim: true,
  },
  bookedAt: {
    type: Date,
    required: true,
    trim: true,
  },
  verified_by: {
    type: ObjectId,
    default: 'none',
    trim: true,
  },
  booked_by: {
    type: ObjectId,
    required: true,
    trim: true,
  },
});

const Order = mongoose.Schema('Order', orderSchema);

module.exports = Order;
