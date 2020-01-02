var mongoose = require('mongoose');

/* khởi tao các cột dữ liệu với kiểm dữ liệu */
var transferSchema = new mongoose.Schema({
    accountId: String,
    amount: Number
});
/* Hướng dẫn https://mongoosejs.com/docs/api.html#mongoose_Mongoose-model */
var Transfer = mongoose.model('Transfer',transferSchema,'transfers');

module.exports = Transfer;