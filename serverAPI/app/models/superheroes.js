//dependencies and connections
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test', function (err) {
	if (err) throw err;
	console.log('Connection to database established!');
});

//schema for superhero object
var Schema = mongoose.Schema;
var superheroSchema = new Schema({
	name: String,
	city: String
});

//building and exporting the model based on schema
module.exports = mongoose.model('superhero', superheroSchema); //defining model with name 'superhero'