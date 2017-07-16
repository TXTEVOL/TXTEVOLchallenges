var express = require('express');
var path    = require ('path') ; // module/object which string of the location
path of project


var app     = express(); // this initializes an express object
app.get('/', function(req, res) {
res.sendFile(path.join(__dirname +'/index.html'));
});


var port = 8080;
console.log("Server now listening on: " + port);
app.listen(port);
