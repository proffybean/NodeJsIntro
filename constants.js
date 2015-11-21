//
// Constants
//

var serverName = "JeffSrv";

var Sleep = function(time){
	//console.log("Sleeping for " + time/1000 + " seconds")
	setTimeout(function(){}, time);
}

var DoubleInt = function(d){
	if (d < 0){
		throw new Error("Cannot be negative");
	}
	Sleep(2000);
	return d*d;
}



module.exports.serverName = serverName;
module.exports.Sleep = Sleep;
module.exports.DoubleInt = DoubleInt;
