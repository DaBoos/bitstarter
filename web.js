var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(25);

app.get('/', function(request, response) {
  response.send("Hello you");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
