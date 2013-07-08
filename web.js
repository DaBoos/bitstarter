var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(25);
buf.write("Hello toi", "utf-8");

app.get('/', function(request, response) {
  response.send(fs.readFile("./index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
