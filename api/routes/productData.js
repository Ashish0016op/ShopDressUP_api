const express=require('express');
const router =express.Router();
const productController=require('../controllers/product')
router.get('/allData',productController.getAllProduct);
router.post('/data',productController.postProduct);
router.get('/products/:id',productController.getProduct);
module.exports=router;