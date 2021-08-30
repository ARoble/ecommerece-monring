const User = require("../Model/userModel");
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      messagge: "found",
      data: users,
    });
  } catch (e) {
    res.status(404).json({ message: "error" });
  }
  res.status(200).json({ message: "get all users" });
};
exports.saveUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.create({
      email: req.body.email,
      userName: req.body.userName,
      password: hashedPassword,
    });
    res.status(201).json({ message: "created user" });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
  res.status(200).json({ message: "save users" });
};
exports.editUser = (req, res) => {
  res.status(200).json({ message: "edit users" });
};
exports.getUser = (req, res) => {
  res.status(200).json({ message: "get one users" });
};
exports.deleteUser = (req, res) => {
  res.status(200).json({ message: "delete users" });
};
