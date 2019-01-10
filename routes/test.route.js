const express=require('express');
const router=express.Router();

const my_test_controller=require('../controllers/test.controller');

router.get('/test',my_test_controller.test);

module.exports=router;