//dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var superheroModel = require('./app/models/superheroes');	//our model
var APIroutes = express.Router();

//enviroment
app.set('port', process.env.PORT || 8000);
app.set('dest', 'localhost');


//routes
APIroutes.get('/superhero', function(req, res) {
	res.json({name: "Batman"});
}); //get for /api/

app.use('/api', APIroutes); //install our api routes

app.get('/', function (req, res) {
	res.send('Hello World!!! Welcome to our homepage!! To start using our API make a GET request to /api/superhero');
});

//binding to port
app.listen(app.get('port'), function(){
	console.log('Magic is happening at http://' + app.get('dest') + ":" + app.get('port') + " !!!");
});