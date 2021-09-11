const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    required: true,
  },
});

const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;
