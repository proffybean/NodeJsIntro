//
// Constants
//

var serverName = "JeffSrv";

var Sleep = function(time){
	//console.log("Sleeping for " + time/1000 + " seconds")
	setTimeout(function(){}, time);
}

module.exports.serverName = serverName;
module.exports.Sleep = Sleep;
