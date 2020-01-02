var mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
    name : String,
    image : String,
    description : String
});

// var ProductA = mongoose.model('HHHHH',productSchema);
// console.log(ProductA);
// var ProductB = mongoose.model('Product',productSchema);
// console.log(ProductB);
var Product = mongoose.model('Product',productSchema,'products');

module.exports = Product;