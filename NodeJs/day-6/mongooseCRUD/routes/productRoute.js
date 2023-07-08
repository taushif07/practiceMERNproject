const express = require("express");
const productsController = require("../controller/products");
const router = express.Router();


router.post("/",productsController.createProduct)
.get("/", productsController.getAllProducts)
.get("/:id", productsController.getProduct)
.put("/:id", productsController.replaceProduct)
.patch("/:id", productsController.updateProduct)
.delete("/:id", productsController.deleteProduct);

exports.router = router;