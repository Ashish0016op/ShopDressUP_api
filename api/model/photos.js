const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const photos = new mongoose.Schema({
    image_1: {
        type: String,
        required: true
    },
    image_2: {
        type: String,
        required: true
    },
    image_3: {
        type: String,
        required: true
    },
    image_4: {
        type: String,
        required: true
    },
    image_5: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('photo', photos);