const Review = require("../Model/reviewModel");

exports.createReview = async (req, res) => {
  try {
    await Review.create(req.body);

    res.status(200).json({ message: "created" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).populate("user");
    res.status(200).json({ reviews });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getReview = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.id }).populate(
      "user"
    );
    res.status(200).json({ reviews });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
