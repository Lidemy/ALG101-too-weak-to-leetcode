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
  let n = Number(lines[0])
  for(let i=1; i<=n; i++) {
    printTree(i, n)
  }
  for(let i=1; i<=n-1; i++) {
    printBottom(n)
  }
}

function printTree(i, n) {
  console.log(
    repeat(' ', n - i) +
    repeat('*', 2*i - 1)
  )
}

function printBottom(n) {
  console.log(repeat(' ', n - 1) + '|')
}

function repeat(str, n) {
  let result = ''
  for(let i=1; i<=n; i++) {
    result += str
  }
  return result
}
