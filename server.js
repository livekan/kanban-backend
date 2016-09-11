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

// -------------------------------------------------------------------------
// new kanban(s) + plus names the instance

router.route('/kanbans')

.post(function(req, res) {

    var kanban = new Kanban();
    kanban.name = req.body.name;
    // save the bear and check for errors
    kanban.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Created!' });
    });

});


    //.get(function(req, res) {
    //  Kanban.find(function(err, kanban){
    //      if (err)
    //        res.send(err);
    //
    //      res.json(kanbans);
    //  });
    //});


//All our routes will be using /API as a prefix

app.use('/api', router);

//The server has to run somehow right?

app.listen(port);
console.log("Fixing scrum on " + port);
