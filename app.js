var express = require('express');
var http = require('http');
var environment = require('./config/environment');
var routes = require('./config/routes');

var app = express();

app.set('auth enabled', true);

environment(app, __dirname);

routes(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
