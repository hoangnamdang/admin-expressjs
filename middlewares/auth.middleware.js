/* lowdb */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json')
const db = low(adapter);
module.exports.loginAuth = function(req, res, next){
    if(!req.signedCookies.userId){
        res.redirect('/auth/login',{ csrfToken: req.csrfToken() });
        return;
    }
    var user = db.get('users')
    .find({ id: req.signedCookies.userId })
    .value();
    
    if(!user){
        res.redirect('/auth/login',{ csrfToken: req.csrfToken() });
        return;
    }
    res.locals.user = user
    next();
}