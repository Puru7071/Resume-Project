const mongoose = require("mongoose") ; 

mongoose.connect("mongodb://localhost/messages") ; 
const db = mongoose.connection ; 

db.on("error" , function(){
    console.error("Error in connection to the database") ; 
    return 
}) ; 

db.once("open" , function(){
    console.log("Sucessfully connected to the DataBase") ; 
    return ; 
})