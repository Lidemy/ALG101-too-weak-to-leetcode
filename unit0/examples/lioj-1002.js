var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

// 拿到所有資料
function solve(lines) {
  for(let i=0; i<lines.length; i++) {
    let temp = lines[i].split(' ')
    let a = Number(temp[0])
    let b = Number(temp[1])

    if (a === 0 && b === 0) {
      return
    }

    if (a > b) {
      console.log(a)
    } else {
      console.log(b)
    }
  }
}
