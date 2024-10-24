const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true, 
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true }); 

const accessoryModel = mongoose.model('accessoryModel', accessorySchema); 

module.exports = accessoryModel;
