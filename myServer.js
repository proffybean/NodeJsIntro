/*
 *	My first web server
 */

var http = require('http');
var con = require('./constants.js');
var os = require('os');
var fs = require('fs');

http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'text/plain',
							'Server': con.serverName} );
	
	console.log("URL: " + request.url);
	
	if (request.url === '/file.txt'){
		fs.createReadStream(__dirname + '/file.txt').pipe(response);
	} else {
		response.end('Jeff\'s first node server: ' + con.serverName);
	}
}).listen(6800);

console.log('Server running at http://127.0.0.1:6800');
console.log('hostname: ' + os.hostname());
console.log('serverName: ' + con.serverName);
con.Sleep(5000);