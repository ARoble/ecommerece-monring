const Order = require("../Model/orderModel");

exports.saveOrder = async (req, res) => {
  try {
    await Order.create(req.body);
    res.status(201).json({ message: "Order created successfully" });
  } catch (e) {
    console.log("error");
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({ orders });
  } catch (e) {
    res.status(400).json({ err: e });
  }
};
