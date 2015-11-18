//
// Request stream
//

// Grab a request stream (this is for http requests)
var request = require('request');

var reqStream = request('http://www.google.com');

reqStream.on('data', function(chunk){
	console.log(">>>DATA>>>" + chunk);
});

reqStream.on('end', function(){
	console.log(">>>END>>>");
});