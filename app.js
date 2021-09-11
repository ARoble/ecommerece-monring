const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
require("./server");
//Initialize
const app = express();

const productRouter = require("./Routes/productRoutes");
const userRouter = require("./Routes/userRoutes");

app.use(cors());
app.use(bodyParser());
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
