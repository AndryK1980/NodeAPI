const express=require('express');
const router=express.Router();

const my_test_controller=require('../controllers/test.controller');

router.get('/test',my_test_controller.test);

router.get('/allprod',my_test_controller.allproducts);

router.post('/create',my_test_controller.productcreate);

router.get('/:id',my_test_controller.productdatails);

router.put('/:id/update',my_test_controller.productupdate);

router.delete('/:id/delete',my_test_controller.productdelete);

module.exports=router;