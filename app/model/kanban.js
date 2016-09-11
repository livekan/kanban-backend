// app/model/kanban.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KanbanSchema = new Schema({
    //<name>: <type>,
    "id" : String,
    "header": String,
    "text": String,
    "isHeader": String,
    "color": String
});

module.exports = mongoose.model('Kanban', KanbanSchema);
