var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(25);
len = buf.write("Hello toi");
console.log(buf.toString());


app.get('/', function(request, response) {
  response.send("hell");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
