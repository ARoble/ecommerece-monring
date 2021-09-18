const express = require("express");
const Router = express.Router();

const reviewController = require("../Controller/reviewController");

Router.route("/").post(reviewController.createReview);
// .get(reviewController.getReviews);

Router.route("/:id").get(reviewController.getReview);

module.exports = Router;
