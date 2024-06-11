const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const products = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    product_title: {
        type: String,
        required: true
    },
    product_photos:{ type: Schema.Types.ObjectId, ref: 'photo' },
    product_price:{
        type: Number,
        required:true
    }
});

module.exports = mongoose.model('product', products);