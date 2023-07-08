require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const productRouter  = require("./routes/productRoute");

const app = express();

console.log(process.env.DB_PASSWORD);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("Connected to Mongodb");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//middlewares
app.use(express.json());
app.use(express.static(process.env.PUBLIC_DIR));
app.use("/products",productRouter.router);


app.listen(process.env.PORT, () => {
    console.log("Server started on port 8080");
});