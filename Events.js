//
// Events and streams
//

// Grab the event stream so that I can emit my own events
var EventEmitter = require('events').EventEmitter; 
var con = require('./constants.js');

var StartEvents = function(numEvents){
	var e = new EventEmitter();
	
	// I'm using nextTick so that the below return statement is called first.
	// that was the event sucscribing happens before the events are emitted.
	process.nextTick(function() {
		e.emit('start');

		for (var i =0; i<numEvents; ++i){
			setTimeout(function() {
				e.emit('data');
			}, 1000);
		}
		
		e.emit('end');
	});

	return (e);
};

var r = StartEvents(5);

console.log("subscribing...");
r.on('start', function() {
	console.log('Start event');
});

r.on('data', function() {
	console.log('Data event');
});

r.on('end', function() {
	console.log('End event');
});