// app/model/kanban.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KanbanSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Kanban', KanbanSchema);
