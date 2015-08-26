RESTful Producer-Consumer Apps

Our API that will:

Handle CRUD for an item (we’re going to use superheroes)
Have a standard URL (http://example.com/api/superheroes and http://example.com/api/superheroes/:superhero_id)
Use the proper HTTP verbs to make it RESTful (GET, POST, PUT, and DELETE)
Return JSON data (since we are using node)
Log all requests to the console


FOLDER STRUCTURE:

serverAPI:
- app/
----- models/
---------- superheroes.js  // our superheroes model
- node_modules/     // created by npm. holds our dependencies/packages
- package.json      // define all our node app and dependencies
- server.js         // configure our application and create routes
- routes.js //this is included in the server.js file (would separate if app was bigger and for production)

ClientConsumer:
-


DEPENDENCIES:

API: express + body-parser + mongoose

Consumer: angular (with ngResource and ngRoute modules)

 

CLI Instructions:

make package.json with main:server and dependencies (express, mongoose, body-parser)

$ npm install

$ sudo npm install -g nodemon      //to run app through nodemon instead of node
