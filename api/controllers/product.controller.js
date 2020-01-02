// var db = require('../db');
var Product = require('../../models/product.model');
// c1
// module.exports.index = function(req, res){
// //   t  /* Phân trang */
// //     var page = parseInt(req.query.page) || 1; // n
// //     var perPage = 8; // x
// //     var start = (page -1) * perPage;
// //     var end = page * perPage;
// //     // drop này là dùng lodash
// //  a   var drop = (page - 1) * perPage
// //     res.render('products/index',{
// //         // c1: phân trang dùng slice 
// //         // products: db.get('products').value().slice(start,end)
// //         // c2: phân trang dùng thuộc ính của lodash js
// //         products: db.get('products').drop(drop).take(perPage).value()
// //     });
//     Product.find().then(function(products){
//         res.render('products/index', {
//             products: products
//         })
//     })

// c2
module.exports.index = async function(req, res){
    //   t  /* Phân trang */
    //     var page = parseInt(req.query.page) || 1; // n
    //     var perPage = 8; // x
    //     var start = (page -1) * perPage;
    //     var end = page * perPage;
    //     // drop này là dùng lodash
    //     var drop = (page - 1) * perPage
    //     res.render('products/index',{
    //         // c1: phân trang dùng slice 
    //         // products: db.get('products').value().slice(start,end)
    //         // c2: phân trang dùng thuộc ính của lodash js
    //         products: db.get('products').drop(drop).take(perPage).value()
    //     });
       var products = await  Product.find();
            res.json(products);
}
module.exports.postProduct = async function(req, res){
    var data = {
        name : req.body.name,
        image : req.body.image,
        description : req.body.description
    }
    var products = await Product.create(data);
    res.json(products);
}