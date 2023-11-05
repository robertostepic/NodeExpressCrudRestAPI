const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rstepic:Vr6Su1hikl8a@cluster0.tobvvrl.mongodb.net/todo?retryWrites=true&w=majority").then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})