const mongoose = require('mongoose')

const newContact = new mongoose.Schema({
    name : {
        type : String
    } ,
    email : {
        type : String ,
        required : true
    } ,
    phone : {
        type : String
    }
})

module.exports = Contact = mongoose.model("contact" , newContact)