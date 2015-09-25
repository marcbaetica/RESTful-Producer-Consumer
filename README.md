# RESTful Producer-Consumer Apps

Our API will:

- Handle CRUD for an item (we’re going to use superheroes)
- Have a standard URL (http://example.com/api/superheroes and http://example.com/api/superheroes/:superhero_id)
- Use the proper HTTP verbs to make it RESTful (GET, POST, PUT, and DELETE)
- Return JSON data (since we are using node)
- Log all requests to the console

This API will in turn be consumed by a client GUI running AngularJS which will be provided or any other method the user wishes to entail (eg: POSTMAN, CURL, or their own browser application capable of consuming RESTful services)

# FOLDER STRUCTURE:


serverAPI: (finished)
-
- app/						//location of MongoDB model (built through MongooseJS)
							//files for the client app (can be deployed separately instead of being hosted by the server)
----- models/
---------- superheroes.js  // our superheroes model
- node_modules/     // created by npm. holds our dependencies/packages
- package.json      // define all our node app and dependencies
- server.js         // configure our application and create routes
- routes.js //this is included in the server.js file (would separate if app was bigger and for production)


clientConsumer: (in progress)
-
- app/
----- index.html				//the homepage
----- css/
---------- bootstrap.min.css   	//bootstrap framework
---------- custom.css	       	//custom CSS
----- js/
---------- angular.min.js		//angular framework
---------- app.js				//angular module and controller
- refference_material/			//personal reference for RESTful Api handling through JQuery and Restangular


Notes:
-
This is the final version of the project merging both the client application and the server. The client app is hosted by the server on its homepage while RESTful calls are being initiated through the Client GUI and handled by the server. Running is done by running the server through the CLI:

CLI Instructions:
- cd to directory of package.json file and run $ npm install
- run with node '$ node server.js' (or optional to run app through nodemon instead of node '$ sudo npm install -g nodemon' and '$ nodemon server.js')


NOTE: To do: Will create a final .sh script for linux to automatically start up both MongoDB and the server.


Current Bugs:

critical:
1) FIX ADDED ON GET SOMETIMES -> $$hashKey: "object:95"
non-critical:
1) FLUSH INPUTS WITH FUNCTION EVERY TIME METHOD IS CHANGED 
2) "Error: [ngRepeat:dupes] http://errors.angularjs.org/... when using POST
3) Use of getPreventDefault() is deprecated.  Use defaultPrevented instead. (SOMETIMES)
4) ALERT NOTIFICATIONS FIX AND MAKE ANOTHER DIFFERENCE BETWEEN CASE 3 AND CASE 4 NOTIFICATIONS

Run instructions:
- run through index.html and make sure js/app.js has the proper MongoDB collection url. 
NOTE: currently only the GET functionality is working.

# DEPENDENCIES FOR:

- API: express + body-parser + mongoose
- Consumer: AngularJS + Bootstrap + bootswatch(Slate) + (optionally to be added are the ngResource and ngRoute modules or RestangularJS)
