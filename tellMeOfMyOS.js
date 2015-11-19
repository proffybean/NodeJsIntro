//
// Tell me of my OS Usul
//

var os = require('os');

console.log('hostname: ' + os.hostname());
console.log('type: ' + os.type());
console.log('platform: ' + os.platform());
console.log('arch: ' + os.arch());
console.log('release: ' + os.release());
console.log('uptime (hours): ' + os.uptime()/(60*60));
console.log('loadavg: ' + os.loadavg());
console.log('totalmem (gigs): ' + os.totalmem()/(1024*1024*1024));
console.log('freemem (gigs): ' + os.freemem()/(1024*1024*1024));
console.log('cpus: ' + os.cpus());
