//
// Socket.io
//
var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function(req, resp) {
	console.log('Received a request for: ' + req.url);
	console.log('From User-Agent: ' + req.headers['user-agent']);

	var chatFile = "chatter.html";
	fs.readFile(__dirname + '/' + chatFile, function(err, data) {
		if (err){
			resp.writeHead(500);
			return resp.end('Error loading the file');
		} else {
			console.log('Sending: ' + chatFile);
			resp.writeHead(200);
			resp.end(data);
		}
	});
};
 
var app = http.createServer(handler);
var io = socketio.listen(app);
process.stdin.setEncoding('utf8');
 
io.sockets.on('connection', function (socket) {
	console.log("Got a connection");
	 
	socket.on('submit', function(data) {
		console.log('Submitted: ' + data); 
	});
	 
	 // Read text from the cmd line and emit it
	process.stdin.on('data', function(chunk) {
		socket.emit('toClientData', chunk);
	});
	 
});
 
app.listen(8080);

console.log('Server running on ' + app.address().address + app.address().port);
