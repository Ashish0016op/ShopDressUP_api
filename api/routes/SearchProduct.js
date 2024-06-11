const express=require('express');
const router =express.Router();
const SearchProductController=require('../controllers/SearchProduct')
router.get('/data/search',SearchProductController.getProductBySearch);

module.exports=router;