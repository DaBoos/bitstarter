var express = require('express');
var fs = require('fs');

var content;
    fs.readFile('./index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    });

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
