const express = require('express');
var multer  = require('multer');


const moduleController = require('../controllers/user.controller');

const userValidate = require('../validates/user.validate');

const userMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

var upload = multer({dest : './public/uploads'});

router.get('/',userMiddleware.loginAuth,moduleController.index);
router.get('/search',moduleController.search);
router.get('/create',moduleController.create);
router.post('/create',
     upload.single('avatar'),
     userValidate.postCreate,
     moduleController.postCreate
     );
router.get('/:id',moduleController.getID);
module.exports = router;