//
// Socket.io
//
var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function(req, resp) {
	console.log('Received a request for:' + req.url);
	console.log('Headers:' + req.headers['user-agent']);
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
 
io.sockets.on('connection', function (socket) {
	console.log("Got a connection");
	 setInterval(function() {
		 var timestamp = Date.now();
		 console.log('Emitted: ' + timestamp);
		 socket.emit('timer', timestamp);
	 }, 2000);
	 
	 socket.on('submit', function(data) {
		console.log('Submitted: ' + data); 
	 });
});
 
app.listen(8080);
 
console.log('Server running');
