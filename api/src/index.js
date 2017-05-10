
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var userService = require('./services/user-service');
var dbService = require('./services/db-service');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});


//Create new user
router.post('/user', function(req, res) {
  if (!req.body) return res.sendStatus(400)

  var newUserEmail = req.body.email;
  var newUserPass = req.body.password;

  userService.addUser(newUserEmail, newUserPass,

    function(error, uid) {

      if (error) {
        return res.status(500).send('Error when creating user');

      } else {
        return res.status(201).send({uid : uid});
      }
    });
});

//Perform authentication
router.post('/login', function(req, res){
  var userEmail = req.body.email;
  var userPassword = req.body.password;

  userService.authenticate(userEmail, userPassword,

    function(error, authData) {

      if (error) {
        return res.status(401).send('Unauthorized');

      } else {
        return res.status(200).send(authData);
      }

    });
});


router.post('/logout', function(req, res) {


  userService.logout(

    function(error, authData) {

      if (error) {
        return res.status(401).send('Unauthorized');

      } else {
        return res.status(200).send(authData);
      }

    });

});



router.post('/postdb', function(req, res) {


  dbService.addProjectStepsByUidAndProjectId(123, 12344, {
      "name":"John",
      "age":30,
      "cars":[ "Ford", "BMW", "Fiat" ]
    },

    function(error, authData) {

      if (error) {
        return res.status(401).send('Unauthorized ' + error );

      } else {
        return res.status(200).send(authData);
      }

    });

});


router.get('/getdb', function(req, res) {


  dbService.getProjectStepsByUidAndProjectId(123,

    function(error, authData) {

      if (error) {
        return res.status(401).send('Unauthorized ' + error );

      } else {
        return res.status(200).send(authData);
      }

    });

});



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);