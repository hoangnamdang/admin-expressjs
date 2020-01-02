const db = require('../db');
// Set some defaults (required if your JSON file is empty)
const shortid = require('shortid');
db.defaults({ users: []}).write();



module.exports.index = function(req, res){
    var dataUser = db.get('users').value();
    res.render('user/index',{
        dataUser : dataUser
    });
}
module.exports.search = function(req, res){
    var dbUser =  db.get('users').value();
    var dataSearch = dbUser.filter(function(value){
        return value.name === req.query.name;
    });
    res.render('user/index',{
        dataUser : dataSearch
    });
}
module.exports.create = function(req, res){
    res.render('user/create');
}
module.exports.postCreate = function(req,res){
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('/').splice(1).join('/');

    db.get('users').push(req.body).write();
  res.redirect('/user');
}
module.exports.getID = function(req,res){
    var dataId = db.get('users')
    .find({ id: req.params.id })
    .value(); // trả về object
    res.render('user/view',{
        dataUser : dataId
    });
}
