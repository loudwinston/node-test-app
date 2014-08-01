
/**
 * Module dependencies.
 */

var express = require('express');


var http = require('http');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);




app.get('*', function(req,res) {

	var str = JSON.stringify(process.env, null, 2);
	res.write("<html><body><h1>This is the BETA branch</h1><pre>"+str+"</pre></body></html>");
	res.end();
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
