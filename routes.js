

var express = require('express');

var router = express.Route();


router.get('/', function(req, res){
	res.JSON({message: 'Hello World!'});
});


module.export = router;
