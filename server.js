//to write here


//dependencies
var express = require('express');


//var definitions
var app = express();
var port = 8080;
var message = 'Hello Worldah!'


//routes
app.get('/', function(req, res){
	res.send(message);
});



app.listen(port);
