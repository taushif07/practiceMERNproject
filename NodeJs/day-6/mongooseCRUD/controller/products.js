const fs = require("fs");

const model = require("../model/products");
const productsData = model.Product;


//CRUD operations :- 
exports.createProduct = async(req,res) => {
    const newProduct = new productsData(req.body);
     await newProduct.save().then((doc) => {
        res.status(201).json(doc);
     }).catch((err) => {
        res.status(501).json(err);
     });
};

exports.getAllProducts = async(req,res) => {
   const allProducts =  await productsData.find();
    res.json(allProducts);
};

exports.getProduct = async(req,res) => {
    const id = req.params.id;
    const product = await productsData.findById(id);
    res.json(product);
};

exports.replaceProduct = async(req,res) => {
    const id = req.params.id;
    try {
        const replaceProduct = await productsData.findOneAndReplace({_id:id},req.body,{new:true});
            res.status(201).json(replaceProduct);
    }catch(err) {
        res.status(400).json(err);
    }
    
};

exports.updateProduct = async(req,res) => {
    const id = req.params.id;
    try{
       const updateProduct = await productsData.findByIdAndUpdate(id,req.body,{new:true});
       res.status(201).json(updateProduct);
    }catch(err) {
        res.status(400).json(err);
    };
};

exports.deleteProduct = async(req,res) => {
    const id = req.params.id;
    try{
        const deleteProduct = await productsData.findOneAndDelete(id);
        res.status(201).json(updateProduct);
     }catch(err) {
         res.status(400).json(err);
     };
}