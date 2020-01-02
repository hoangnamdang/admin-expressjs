const db = require('../db');

const shortid = require('shortid')
module.exports = function(req, res, next){
  
    if(!req.signedCookies.sessionId) {
        // xét cookie là userId và value là shortid.generate()
        // signed : true là cho phép sử dụng signedCookies để bảo mật hơn, người dùng không chỉnh sửa giá trị cookie được
        var sessionId = shortid.generate();
        res.cookie('sessionId',sessionId, {
            signed: true
        });
        // Lưu sessions trong database
        db.get('sessions')
        .push({ id: sessionId })
        .write();
    }
    next();
}