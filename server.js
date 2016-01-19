//DEPENDENCIES =====================================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var superhero = require('./app/models/superheroes');	//our model
var apiRouter = express.Router();
var bodyParser = require('body-parser');
var path = require('path');					//OPTIONAL - when sending the path one folder up


//ENVIROMENT AND BODY-PARSER CONFIG ================================================
app.set('port', process.env.PORT || 8000);
app.set('dest', 'localhost');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'));	//serving static files for use at client side


//ROUTES ===========================================================================
apiRouter.get('/superheroes', function (req, res){
	console.log('The list of all superheroes has been requested!')
	//res.json({superheroes: "all"});
	//find all documents and return them JSON format
	superhero.find(function (err, doc) {
		if (err) throw err;
		res.json(doc);
	});

	//res.send(JSON.stringify(sup.find()));	
});

apiRouter.post('/superheroes', function (req, res) {  //url encode with parameters name and city as Strings
	console.log('Creating a superhero with given POST parameters!');
	
	var dataToInsert = superhero({
		name: req.body.name,
		city: req.body.city
	});

	dataToInsert.save(function (err, doc) {
		if (err) throw err;
		res.send('Superhero ' + req.body.name + ' has been added to the database!');
	});
});

//middleware for s_id parameter routing
apiRouter.param('s_id', function (req, res, next, id) {
	console.log('There is a request for superhero id '+ id + " !")
	next();
});

//routes for s_id parameter
apiRouter.route('/superheroes/:s_id')
	.get(function (req, res) {
		//res.send('There was a GET request on superhero ' + req.params.s_id)})
		superhero.findById(req.params.s_id, function (err, doc) {
			if (err) throw res.send(err);
			res.json(doc);
		})
	})
	.put(function (req, res) {
		//res.send('There was a PUT request on superhero ' + req.params.s_id)
		superhero.findById(req.params.s_id, function (err, doc) {
			if (err) throw err;
			//update the info and save the document in the db
			doc.name = req.body.name;
			doc.city = req.body.city;
			doc.save(function (err) {
				if (err) throw err;
				res.json({message: 'Superhero info updated!'});
			});
		})
	})
	.delete(function (req, res) {
		//res.send('There was a DELETE request on superhero ' + req.params.s_id)
		superhero.remove({_id: req.params.s_id}, function (err, doc) {
			if (err) throw err;
			res.json({message: 'Superhero has been deleted!'});
		});
	});

//set the routes on our app
app.use('/api', apiRouter);

//our homepage
app.get('/', function (req, res) {
	console.log('The homepage has been requested!')
	res.sendFile(path.join(__dirname, "/app/index.html"));
});



//BINDING TO PORT ==================================================================
app.listen(app.get('port'), function(){
	console.log('Magic is happening at http://' + app.get('dest') + ":" + app.get('port') + " !!!");
});



/*

FOR TESTING PURPOSES

var request = require('request').defaults({jar: true});
var prettyjson = require('prettyjson');
​
var url = 'http://localhost:10643/WebClient/rest';
var jar = request.jar();
var jsonHeader = {"content-type": "application/json"};
​
//Query object to send
var query = {'InventorySearchFacetRequest': {
    'filter': [
        {
            'field': 'vendorName',
            'value': 'CentOS'
        },
        {
            'field': 'productName',
            'value': 'kernel'
        }
    ],
    'size': 5,
    'freeFormQuery': '*',
    'searchIndex': 'inventory',
    'aggregationList': [
        'vendorName',
        'computerName'
    ]
}};
​
//Test function
function test() {
	//Credentials to log into DSM
	var credentials = '{"dsCredentials":{"userName":"admin","password":"admin"}}';
	//Login with a post request to /rest/authentication/login
	request.post({url: url + '/authentication/login', body: credentials, headers: jsonHeader},
			function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			//If login succeeds, use sID from login to query /rest/softwareInventory
			var inventoryUrl = url + '/softwareInventory';
			
			//sID is needed in a cookie for the query
			var cookie = request.cookie('sID=' + body);
			jar.setCookie(cookie, inventoryUrl);
			
			//Send the query
			request.post({url: inventoryUrl, json: true, body: query, jar: jar},
					function(error, response, body) {
				//Pretty print the response
				console.log(prettyjson.render(body, {numberColor: 'cyan'}));
			});
			//Log out with a request to /rest/authentication/logout
			request.del({url: url + '/authentication/logout?sID=' + body});
		} else {
			//If login fails, print the response for debugging purposes
			console.log(response);
		}
	});
}
test();

*/
