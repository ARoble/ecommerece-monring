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

exports.signin = async (req, res) => {
  try {
    //code
    //1. does the user exsists
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.status(400).json({ message: "user does not exsist" });
    }

    //2. password database same pass
    const compare = await bcrypt.compare(req.body.password, user.password);
    if (compare === false) {
      return res.status(400).json({ message: "Wrong password" });
    }
    res.status(200).json({ message: "logged in" });
  } catch (e) {
    res.status(404).json({ message: "error" });
  }
};

exports.saveUser = async (req, res) => {
  try {
    if (
      req.body.email === "" ||
      req.body.password === "" ||
      req.body.userName === ""
    ) {
      return res.status(400).send({ message: "please fill in all fields" });
    }

    const user = User.findOne({ email: req.body.email });
    if (user !== null) {
      return res.status(400).json({ message: "Email already exsists" });
    }
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
