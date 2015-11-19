//
// Processing standard in 
//

//stdin is paused at the get-go
process.stdin.resume();
process.stdin.setEncoding('utf8');

// read from stdin and echo the data
process.stdin.on('data', function(chunk) {
	process.stdout.write('Data -> ' + chunk);
});

process.stdin.on('end', function() {
	process.stderr.write('End!\n');
});

process.on('SIGTERM', function() {
	process.stderr.write("Why are you trying to terminate me?");
});

console.log("Node process #" + process.pid);

