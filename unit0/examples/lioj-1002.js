var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  for(let i=0; i<lines.length; i++) {
    let [a, b] = lines[i].split(' ')
    if (a == 0 && b == 0) break
    console.log(a > b ? a : b)
  }
})