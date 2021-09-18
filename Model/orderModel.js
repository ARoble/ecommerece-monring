const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  firstName: String,
  secondName: String,
  email: String,
  shipping: String,
  phone: String,
  order: [
    {
      productName: String,
      quantity: Number,
      price: Number,
      total: Number,
    },
  ],

  subtTotal: Number,
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
