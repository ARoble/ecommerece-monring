const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  firstName: String,
  secondName: String,
  email: String,
  shipping: String,
  phone: String,
  cart: [
    {
      name: String,
      quantity: Number,
      price: Number,
      total: Number,
      image: String,
    },
  ],

  total: Number,
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
