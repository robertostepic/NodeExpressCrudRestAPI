require('dotenv').config()
const mongoose = require('mongoose');	
const express = require('express');	
const app = express();
const port = process.env.PORT || 5000;

//midlleware
app.use(express.json());

//connect to db
require('./db/connect');

//routes
app.get("/api", (req,res) => {
    res.json("Hello world")
})

//start server
app.listen(port, () => console.log(`Server started on port ${port}`));