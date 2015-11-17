/*
 *	My first web server
 */

var http = require('http');

http.createServer(function(requeset,response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Jeff\'s first node server\n');
}).listen(6800);

console.log('Server running at http://127.0.0.1:6800');