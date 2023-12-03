const fs = require('fs');

var write = fs.createWriteStream("message.txt", {flags: 'a'});

var read = fs.createReadStream("input.txt");
write.on('close', function() {
 console.log("done writing");
});

read.pipe(write);