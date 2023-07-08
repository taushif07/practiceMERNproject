const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync("data.json","utf-8"));
const productsData = jsonData.products;


//CRUD operations :- 
exports.createProduct = (req,res) => {
    const newProduct = req.body;
    productsData.push(newProduct);
    res.status(201).json(newProduct);
};

exports.getAllProducts = (req,res) => {
    res.json(productsData);
};

exports.getProduct = (req,res) => {
    const id = +req.params.id;
    const product = productsData.find(p => p.id===id);
    res.json(product);
};

exports.replaceProduct = (req,res) => {
    const id = +req.params.id;
    const productIndex = productsData.findIndex(p => p.id === id);
    const replacedProductData = productsData.splice(productIndex,1,{...req.body, id:id});
    res.status(201).json(replacedProductData);
};

exports.updateProduct = (req,res) => {
    const id = +req.params.id;
    const productIndex = productsData.findIndex(p => p.id === id);
    const product = productsData[productIndex];

    const newupdataedProductData = productsData.splice(productIndex,1,{...product,...req.body});

    res.status(201).json(newupdataedProductData);
};

exports.deleteProduct = (req,res) => {
    const id = +req.params.id;
    const productIndex = productsData.findIndex(p => p.id === id);
    const product = productsData[productIndex];

    const deletedProductData = productsData.splice(productIndex,1);

    res.status(201).json(deletedProductData);
}