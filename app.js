require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
// const apiProductRoute = require('./api/routers/product.router');
var bodyParser = require('body-parser'); // để dùng req.body
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
/* Kết nối tới database mongodb bằng module mongoose */
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route');
const transferRoute = require('./routes/transfer.route');


// setup route middlewares

const userMiddleware = require('./middlewares/auth.middleware');
const sessionMiddleware = require('./middlewares/session.middleware');

/* pugjs pughtml */
const pug = require('pug');
app.set('views', './views');
app.set('view engine', 'pug');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser(process.env.COOKIE_PARSER_KEY));

app.use(express.static('public'));

app.use(sessionMiddleware);
app.use(csurf({ cookie: true }));
app.get('/',function(req, res) {
    res.render('index');
});
/* app.use giống như route group laravel và có middlewares */
app.use('/user',userMiddleware.loginAuth,userRoute);
app.use('/auth',authRoute);
app.use('/products',productRoute);
app.use('/cart',cartRoute);
app.use('/transfer',userMiddleware.loginAuth,transferRoute);
// app.use('/api/products',apiProductRoute);
app.listen(port,function(){console.log('example app listening on port' + port)});