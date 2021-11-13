"use strict";
var express = require('express');
var path = require('path');
var app = express();
app.get('/', function (req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(express.static(path.join('public')));
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Server is run on port: ' + PORT);
});
