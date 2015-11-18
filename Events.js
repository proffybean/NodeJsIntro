//
// Events and streams
//
// This file can be run independatly.  It simply creates an EventEmitter
// and subscribes to three events.  It then fires those evens and logs
// the output.
//

// Grab the event stream so that I can emit my own events
var EventEmitter = require('events').EventEmitter; 
var con = require('./constants.js');

var StartEvents = function(numEvents){
	var e = new EventEmitter();
	
	// I'm using nextTick so that the below return statement is called first.
	// that was the event sucscribing happens before the events are emitted.
	process.nextTick(function() {
		var count = 0;
		e.emit('start');
		var t = setInterval(function() {
			e.emit('data');
			 ++count;
			if (count === numEvents){
				e.emit('end');
				clearInterval(t);
			}
		}, 1000);
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