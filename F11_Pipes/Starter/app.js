var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greetzip.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);

