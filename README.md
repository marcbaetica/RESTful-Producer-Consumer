# RESTful Producer-Consumer Apps

Our API will:

- Handle CRUD for an item (we’re going to use superheroes)
- Have a standard URL (http://example.com/api/superheroes and http://example.com/api/superheroes/:superhero_id)
- Use the proper HTTP verbs to make it RESTful (GET, POST, PUT, and DELETE)
- Return JSON data (since we are using node)
- Log all requests to the console

This API will in turn be consumed by a client GUI running AngularJS which will be provided or any other method the user wishes to entail (eg: POSTMAN, CURL, or their own browser application capable of consuming RESTful services)

# FOLDER STRUCTURE FOR:

serverAPI: (finished)
-
- app/
----- models/
---------- superheroes.js  // our superheroes model
- node_modules/     // created by npm. holds our dependencies/packages
- package.json      // define all our node app and dependencies
- server.js         // configure our application and create routes
- routes.js //this is included in the server.js file (would separate if app was bigger and for production)

CLI Instructions:
- cd to directory of package.json file and run $ npm install
- run with node '$ node server.js' (or optional to run app through nodemon instead of node '$ sudo npm install -g nodemon' and '$ nodemon server.js')


clientConsumer: (in progress)
-
//to fill in here

# DEPENDENCIES FOR:

- API: express + body-parser + mongoose
- Consumer: AngularJS (with ngResource and ngRoute modules)
