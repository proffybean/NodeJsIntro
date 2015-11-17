/*
 *	My first web server
 */

var http = require('http');
var con = require('./constants.js');
var os = require('os');

http.createServer(function(requeset,response){
	response.writeHead(200, {'Content-Type': 'text/plain',
							'Server': con.serverName} );
	response.end('Jeff\'s first node server\n' + con.serverName);
}).listen(6800);

console.log('Server running at http://127.0.0.1:6800');
console.log('hostname: ' + os.hostname());
console.log('serverName: ' + con.serverName);