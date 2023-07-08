const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number,required:true , min:[0,"not a valid price"]},
    discountPercentage: {type:Number, min:[0,"not a valid discount"], max:[100, "not a valid discount"]},
    rating: {type:Number, required:true, min:[0,"not a valid rating"], max:[5, "not a valid rating"]},
    stock: {type:Number},
    brand: {type:String, required:true},
    category: {type:String, required:true},
    thumbnail: {type:String, required:true},
    images: [{type:String}]
  });

  exports.Product = mongoose.model('Product', productSchema);