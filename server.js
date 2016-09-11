// server.js
//This is our decoupled API backend that we will use as a bridge between our
//CV Camera and our Web App front end

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Kanban = require('./app/models/kanban');

//Connecting to our mongo webscale database

mongoose.connect('mongodb://localhost:27017/test');

//BodyParser allows us to get data from a POST from our CV

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//We are setting up our routes here

var router = express.Router();

//Middleware is on the beat

router.use(function(req, res, next) {
  console.log('Something is happen.');
  next();
});

//The usual test router

router.get('/', function (req, res){
  res.json({ message: 'we bouta do things' });
});

// -----------------------------------------------------------------------------
// new kanban(s) + plus names the instance
//var kanban = Kanban();
//router.route('/kanbans/cv')
//
//.post(function(req, res) {

  //  var kanban = new Kanban();
  //  kanban.id = req.body.id;
  //  kanban.color = req.body.color;



    // save the user and check for errors
  //  kanban.save(function(err) {
    //    if (err)
      //      res.send(err);

    //    res.json({ message: 'Created Kanban CV data' });
  //  });

//})

//------------------------------------------------------------------------------

router.route('/kanbans')

.post(function(req, res) {
    console.log("did it");
    var kanban = new Kanban(req.body);
    kanban.id = req.body.id;
    kanban.header = req.body.header;
    kanban.text = req.body.text;
    kanban.isHeader = req.body.isHeader;
  //  kanban.color = req.body.color;
  //  kanban.title = req.body.title;
  //  kanban.notes = req.body.notes;
  //  kanban.notes.color = req.body.notes.color;
  //  kanban.notes.desc = req.body.notes.desc;
  //  kanban.notes.assignee = req.body.notes.assignee;
console.log(req.body);


    // save the user and check for errors
    kanban.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Created Kanban!' });
    });

})

    .get(function(req, res) {
      kanban.find(function(err, kanban){
          if (err)
            res.send(err);

          res.json(kanbans);
      });
    });

// -----------------------------------------------------------------------------
//new plus get users

router.route('/users')

.post(function(req, res) {

    var user = new User();
    user.name = req.body.name;
    user.pink = req.body.pink;
    user.yellow = req.body.yellow;
    user.blue = req.body.blue;
    user.green = req.body.green;
    user.pink2 = req.body.pink2;
    user.yellow2 = req.body.yellow2;
    user.blue2 = req.body.blue2;
    user.green2 = req.body.green2;
    user.time_employed = req.body.time_employed;
    user.rating = req.body.rating;
    user.completed = req.body.completed;
    user.assigned = req.body.assigned;

    // save the user and check for errors
    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Created User!' });
    });

})


    .get(function(req, res) {
      user.find(function(err, kanban){
          if (err)
            res.send(err);

          res.json(users);
      });
    });

//------------------------------------------------------------------------------
//Our analytics suite will be here if possible

//All our routes will be using /API as a prefix

app.use('/api', router);

//The server has to run somehow right?

app.listen(port);
console.log("Fixing scrum on " + port);
