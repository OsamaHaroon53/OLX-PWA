var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    
    name: {
        type:String, 
        required:true
    },
    password: {
        type:String,
        required:true
    },
    email: {
        type:String,
    },
    contact_No: {
        type:Number,
        required:true
    } 
},{collection : 'Users'});

module.exports = mongoose.model('Users',userSchema);
