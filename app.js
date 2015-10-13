/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	multer = require('multer'),
	upload = require('./routes/upload'),
	http = require('http'),
	path = require('path');

uploader = multer({
	dest: 'uploads/'
});

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.post('/upload', uploader.single('singleFile'), upload.s3); //"singleFile" is the field name

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
