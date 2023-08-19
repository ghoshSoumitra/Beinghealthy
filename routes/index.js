const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

//home page
router.get('/',homeController.home);

//bmi calculetor
router.post('/bmicalculator',homeController.BMICal);

//blood pressure calculetor
router.post('/bloodPressure',homeController.bloodCal);

//signout
router.get('/signout',homeController.signout);



// user
router.use('/user',require('./user'));

module.exports=router;