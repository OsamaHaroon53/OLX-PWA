var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adsSchema = new Schema({
    title: {
        type:String, 
        required:true
    },
    category: {
        type:String, 
        required:true
    },
    image: {
        type:String
    },
    description: {
        type:String
    },
    name: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    contact_No: {
        type:Number,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    date: {
        type:String,
        required:true
    } 
},{collection : 'Ads'});

module.exports = mongoose.model('Ads',adsSchema);
