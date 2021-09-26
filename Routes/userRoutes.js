const express = require("express");

const router = express.Router();
const userController = require("./../Controller/userController");
//post
router.route("/").get(userController.getUsers).post(userController.saveUser);
router.route("/signin").post(userController.signin);
// get delete put
router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.editUser)
  .delete(userController.deleteUser);

module.exports = router;
