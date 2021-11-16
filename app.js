// importing module
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

// connecting to database
const connection = require("./model/database");


// importing routes controller controler
const CourseController = require('./routes/controller');

// creating app function
var app = express();

app.use(bodyParser.urlencoded({
    extended : true
}));

// creating server
var server = http.createServer(app);

// static files
app.use('/static',express.static('static'));

// setting views engine
app.set('view engine','pug');
app.set('/views',path.join(__dirname) , 'views');

// routes
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/home_page.html'));
});

app.use("",CourseController);


app.get('/task',function(req,res){
    res.send("hello");
});

// server listing
server.listen(3000,function(){
    console.log("server is created at port 3000");
});