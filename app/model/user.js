// app/model/user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    //<name>: <type>,
    "name": String,
    "pink": String,
    "yellow": String,
    "blue": String,
    "green": String,
    "pink2": String,
    "yellow2": String,
    "blue2": String,
    "green2": String,
    "time_employed": Number,
    "rating": Number,
    "completed": Array,
    "assigned": Array,
});

module.exports = mongoose.model('User', UserSchema);
