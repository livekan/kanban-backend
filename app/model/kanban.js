// app/model/kanban.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KanbanSchema = new Schema({
    //<name>: <type>,
    "id": integer,
    "header": integer,
    "text": String,
    "color": String

});

module.exports = mongoose.model('Kanban', KanbanSchema);
