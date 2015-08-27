//DEPENDENCIES =====================================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var superheroModel = require('./app/models/superheroes');	//our model
var apiRouter = express.Router();



//ENVIROMENT =======================================================================
app.set('port', process.env.PORT || 8000);
app.set('dest', 'localhost');



//ROUTES ===========================================================================
apiRouter.get('/superheroes', function (req, res){
	console.log('The list of all superheroes has been requested!')
	res.json({superheroes: "all"});
});

apiRouter.post('/superheroes', function (req, res) {
	res.send("Creating a superhero with given POST parameters!");
});

//middleware for s_id parameter routing
apiRouter.param('s_id', function (req, res, next, id) {
	console.log('There is a request for superhero id '+ id + " !")
	next();
});

//routes for s_id parameter
apiRouter.route('/superheroes/:s_id')
	.get(function (req, res) {res.send('There was a GET request on superhero ' + req.params.s_id)})
	.put(function (req, res) {res.send('There was a PUT request on superhero ' + req.params.s_id)})
	.delete(function (req, res) {res.send('There was a DELETE request on superhero ' + req.params.s_id)});

//set the routes on our app
app.use('/api', apiRouter);

//our homepage
app.get('/', function (req, res) {
	console.log('The homepage has been requested!')
	res.sendFile(__dirname + "/index.html");
});



//BINDING TO PORT ==================================================================
app.listen(app.get('port'), function(){
	console.log('Magic is happening at http://' + app.get('dest') + ":" + app.get('port') + " !!!");
});