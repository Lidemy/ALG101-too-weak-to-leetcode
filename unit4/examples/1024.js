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
  let N = Number(lines[0])
  let M = Number(lines[1])
  for(let k=1; k<=N; k++) {
    for(let i=1; i<=M; i++) {
      console.log(k + '*' + i + '=' + k*i)
      // console.log(`${k}*${i}=${k*i}`)
    }
  }
}

