var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipmentSchema = Schema({
    name: { type: String },
}, { collection: "equipements" });

module.exports = mongoose.model("Equipment", equipmentSchema);