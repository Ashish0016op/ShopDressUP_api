const express=require('express');
const router =express.Router();
const photoController=require('../controllers/photo')
router.post('/photo',photoController.postPhoto);

module.exports=router;