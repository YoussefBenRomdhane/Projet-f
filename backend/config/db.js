var mongoose = require('mongoose');
// var url = "mongodb://localhost/stationf";
var url = "mongodb://youssefbr:youssef00000@ds153763.mlab.com:53763/project-f-db";

mongoose.connect(url, { useNewUrlParser: true }, function (err, result) {
    if (err) {
        return ("Oops: " + err);
    }
    console.log("Connexion réussie :) ");
});