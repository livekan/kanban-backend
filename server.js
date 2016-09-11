// server.js
//This is our decoupled API backend that we will use as a bridge between our
//CV Camera and our Web App front end

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Kanban = require('./app/models/kanban');
var fs = require('fs');

var COMMENTS_FILE = path.join(__dirname, 'kanban2.json');
var DATA_FILE = path.join(__dirname, 'kanban.json');

//Connecting to our mongo webscale database

mongoose.connect('mongodb://localhost:27017/livekan');

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
    console.log(req.body);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(req.body, null, 4), function(err) {
     if (err) {
       console.error(err);
       process.exit(1);
     }
     res.send('dope');
   });

console.log(req.body);
})

    .get(function(req, res) {
       fs.readFile(COMMENTS_FILE, function(err, data) {
         if (err) {
           console.error(err);
           process.exit(1);
         }
         res.json(JSON.parse(data));
       });
     });


// -----------------------------------------------------------------------------
router.route('/altmock')

    .get(function(req, res) {
       fs.readFile(DATA_FILE, function(err, data) {
         if (err) {
           console.error(err);
           process.exit(1);
         }
         res.json(JSON.parse(data));
       });
     });

//------------------------------------------------------------------------------
//Our analytics suite will be here if possible

//All our routes will be using /API as a prefix

app.use('/api', router);



//The server has to run somehow right?

app.listen(port);
console.log("Fixing scrum on " + port);
