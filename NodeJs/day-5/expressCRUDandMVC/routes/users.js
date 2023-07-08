const express = require("express");
const productsController = require("../controller/users");
const router = express.Router();


router.post("/",productsController.createUser)
.get("/", productsController.getAllUsers)
.get("/:id", productsController.getUser)
.put("/:id", productsController.replaceUser)
.patch("/:id", productsController.updateUser)
.delete("/:id", productsController.deleteUser);

exports.router = router;