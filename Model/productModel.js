const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
  date: Date,
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
