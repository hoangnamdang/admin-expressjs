const db = require('../db');
var Transfer = require('../models/transfer.model');
const shortid = require('shortid');
module.exports.create = function(req, res, next) {
    res.render('transfer/create',{ csrfToken: req.csrfToken() });
};
module.exports.postCreate = function(req, res, next) {
    var data = {
        id : shortid.generate(),
        accountId : req.body.accountId,
        amount : parseInt(req.body.amount),
        userId : req.signedCookies.userId
    }
    /*  req.body.id = shortid.generate();
     req.body.accountId = req.body.accountId;
     req.body.amount = req.body.amount; */
//     db.get('transfers').push(data).write();
//     db.get('posts')
//   .push({ id: 1, title: 'lowdb is awesome'})
//   .write();
    res.redirect('/transfer/create');
}