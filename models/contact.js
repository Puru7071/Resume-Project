const mongoose = require("mongoose") ; 

const messageSchema = new mongoose.Schema({
    Name : {
        type : String , 
        required : true 
    } , 
    Email : {
        type : String  , 
        required : true 
    } , 
    Message : {
        type : String , 
        required : true 
    }
}) ; 
const Message = mongoose.model("Message" , messageSchema) ; 

module.exports = Message ; 