//to write here


//dependencies
var express = require('express');
var app = express();



//defining the variables
var port = 3000;
var message = 'Hello Worldah!'



//routes for the API
var router = express.Router();	//get an instance of the express Router

//test route
router.get('/', function(req, res){
	//res.send(message);
	res.json({ message: 'horray! welcome to our api!'});
});

//registering the ROUTES for the api prefix
app.use('/api', router);


//starting the server
app.listen(port);
console.log('Magic is happening at http://localhost:' + port + '/api!');
