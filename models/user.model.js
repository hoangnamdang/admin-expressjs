var mongoose = require('mongoose');

/* khởi tao các cột dữ liệu với kiểm dữ liệu */
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    avatar: String,
    Phone: String
});
/* Hướng dẫn https://mongoosejs.com/docs/api.html#mongoose_Mongoose-model */
var User = mongoose.model('User',userSchema,'users');
/* mongoose.model('User',userSchema,'users');
* User là tên model
* userSchema 
* users là collection s
*/

module.exports = User;