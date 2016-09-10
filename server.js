// server.js
//This is our decoupled API backend that we will use as a bridge between our
//CV Camera and our Web App front end

var express = require('express');
var app = require();
var bodyParser = require('bodyParser');

//BodyParser allows us to get data from a POST from our CV

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//We are setting up our routes here

var router = express.Router();

//The usual test router

router.get('/', function (req, res){
  res.json({  message: 'we bouta do things'});
})

//All our routes will be using /API as a prefix

app.use('/api', router);

//The server has to run somehow right?

app.listen(port);
console.log("Fixing scrum on " + port);
