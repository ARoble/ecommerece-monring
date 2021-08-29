exports.products = (req, res) => {
  res.status(200).json({
    message: "All products",
  });
};

exports.createProduct = (req, res) => {
  res.status(200).json({
    message: "product created",
  });
};
exports.getProduct = (req, res) => {
  res.status(200).json({
    message: "Found product",
  });
};
exports.editProduct = (req, res) => {
  res.status(200).json({
    message: "edited product",
  });
};
exports.deleteProduct = (req, res) => {
  res.status(200).json({
    message: "deleted product",
  });
};

const creatuser = (req, res) => {
  res.status(200).json({
    messsage: "hi",
  });
};
