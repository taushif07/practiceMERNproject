require('dotenv').config();
const express = require("express");
const morgan = require("morgan");

const productRouter  = require("./routes/products");
const userRouter = require("./routes/users");

const server = express();

console.log(process.env.DB_PASSWORD);
//body parser
server.use(express.json());
server.use(morgan("dev"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products",productRouter.router);
server.use("/users",userRouter.router);





server.listen(process.env.PORT, () => {
    console.log("Server started in port 8080");
});