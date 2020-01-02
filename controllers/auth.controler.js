/* lowdb */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json')
const db = low(adapter);
module.exports.login = function(req, res){
    res.render('auth/login',{ csrfToken: req.csrfToken() });
}
module.exports.postLogin = function(req, res, next){
    var user = db.get('users')
    .find({ email: req.body.email })
    .value();

    var password = db.get('users')
    .find({ password: req.body.password })
    .value();

    if(req.body.email !== user.email){
        res.render('auth/login',{
            errors: "Email not exist",
            values: req.body
        })
        return;
    }
    if(req.body.password !== user.password){
        res.render('auth/login',{
            errors: "Password error",
            values: req.body
        })
        return;
    }
    // vd gán một cookies để làm middlewares 
    res.cookie("userId",user.id,{signed : true})
    res.redirect('/user');
}