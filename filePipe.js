//
// Creating a file from a HTTP response
//
var request = require('request');
var fs = require('fs');
var zlib = require('zlib');
var url = 'http://www.google.com/'; 

request(url).pipe(fs.createWriteStream('google.html'));
request(url).pipe(zlib.createGzip()).pipe(fs.createWriteStream('google.html.gz'));
