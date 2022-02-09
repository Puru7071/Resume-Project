const express = require("express") ; 
const path = require("path") ; 
const port = 7777 ; 

const db = require("./configure/mongoose") ; 
const Message = require("./models/contact") ; 

const app = express() ; 
app.set("view engine" , "ejs") ; 
app.set("views" , path.join(__dirname , "views")) ; 
app.use(express.static("assets")) ; 
app.use(express.urlencoded()) ; 

app.listen(port , function(error){
    if(error){
        console.error(error) ; 
        return ; 
    }
    console.log("The Server is up and running on Port no: " + port) ; 
    return ; 
}) ; 

app.get("/" , function(request , response){
    let data = {
        title : "Puru Bhargava" 
    } ; 
    return response.render("Resume" , data) ; 
}); 


app.post("/new-message" , function(request , response){
    Message.create({
        Name : request.body.Name , 
        Email : request.body.Email , 
        Message : request.body.Message 
    } , function(error , newMessage){
        if(error){
            console.log(error) ; 
            return ; 
        }
        console.log(newMessage) ; 
    }) ; 
    return response.redirect("back") ; 
}) ; 