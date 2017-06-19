var http = require('http');
var express = require('express');
var config = require('./config.json');
var mysql = require('mysql');

var app = express();
app.set('PORT', config.webPort);

app.all('*', function(request, response, next) {
	console.log(request.method + " " + request.url);
	next();
})

app.use('/api/v3', require('./routes/db'));

var port = process.env.PORT || app.get('PORT');
app.listen(port, function(){
	console.log('De server luistert op port: '+ port);	
});
