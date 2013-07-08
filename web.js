var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

buf = new Buffer(256);
buf.write(fs.readFile('index.html'));

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
