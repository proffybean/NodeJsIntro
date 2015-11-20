var http = require('http');
console.log("Going to make http request");

var req = http.request('http://www.wordproess.com', function(response) {
	console.log(response.statusCode);
	//response.pipe(process.stdout);
	console.log();
});

req.end();