const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/web', { useUnifiedTopology: true, useNewUrlParser: true } ,(err)=>{
    if(!err)
    {
        console.log("connection sucessfully");
    }
    else
    {
        console.log("error in connection");
    }
});

const Course = require("./schema");