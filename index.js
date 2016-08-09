var express = require('express');
var app = express();

/* --------------------------  STATIC   --------------------------*/
app.use('/include', express.static('bower_components'));
app.use('/data', express.static('data'));
app.use('/public', express.static('public'));
app.get('/', function (req, res) {
	res.redirect('/public/index.html');
});

app.listen(8000);
console.log('Application Started on http://localhost:8000/')