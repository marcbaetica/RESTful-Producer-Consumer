$.ajax({
  type: 'GET',
  url: 'http://localhost:8000/api/johnbob/friends',
  success: function(data) {
    console.log("I have friends!", data); //returns all of johnbob's friends
  }
});

//add a new item: POST /api/:user/:collection (Collection is created when you post your first item)

$.ajax({
  type: 'POST',
  url: 'http://localhost:8000/api/johnbob/friends',
  data: {name: 'Billy Bob', age: 27},
  success: function(data) {
    console.log("Friend added!", data); //the new item is returned with an ID
  }
});

//get a single item: GET /api/:user/:collection/:id

$.ajax({
  type: 'GET',
  url: 'http://localhost:8000/api/johnbob/friends/1',
  success: function(data) {
    console.log("Here's a friend!", data); //returns friend id#1
  }
});

//update an item with new data: PUT /api/:user/:collection/:id

$.ajax({
  type: 'PUT',
  data: {name: 'Billy Bob', age: 28},
  url: 'http://localhost:8000/api/johnbob/friends/1',
  success: function() {
    //no data...just a success (200) status code
    console.log('Friend Updated Successfully!');
  }
});

//delete an item: DELETE /api/:user/:collection/:id

$.ajax({
  type: 'DELETE',
  url: 'http://localhost:8000/api/johnbob/friends/1',
  success: function() {
    //no data...just a success (200) status code
    console.log('Friend Deleted Successfully!');
  }
});