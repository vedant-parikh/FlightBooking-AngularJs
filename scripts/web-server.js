var express = require('express');
var path = require('path');

/* Starting an express app */
var app = express();

var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.get('*', function (req, res) {
    res.sendFile(rootPath + '/app/index.html');
});

app.listen(8000);
console.log("Server running on port 8000...");
