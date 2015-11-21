//
// Socket.io
//
var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function(req, resp) {
	console.log('Received a request for: ' + req.url);
	console.log('From User-Agent: ' + req.headers['user-agent']);
	fs.readFile(__dirname + '/socketIOclient.html', function(err, data) {
		if (err){
			resp.writeHead(500);
			return resp.end('Error loading the file');
		} else {
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
	 setInterval(function() {
		 var timestamp = Date.now();
		 console.log('Emitted: ' + timestamp);
		 socket.emit('timer', timestamp);
	 }, 10000);
	 
	 socket.on('submit', function(data) {
		console.log('Submitted: ' + data); 
	 });
	 
	 // Add std in text reading
	process.stdin.on('data', function(chunk) {
		socket.emit('timer', chunk);
	});
	 
});
 
app.listen(8080);

console.log('Server running on ' + app.address().address + app.address().port);
