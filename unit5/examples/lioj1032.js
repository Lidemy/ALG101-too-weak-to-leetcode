var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  let t = Number(lines[0])
  for(let i=1; i<=t; i++) {
    let start = (i-1)*4 + 1
    let x1 = Number(lines[start])
    let y1 = Number(lines[start + 1])
    let x2 = Number(lines[start + 2])
    let y2 = Number(lines[start + 3])
    console.log(distance(x1, y1, x2, y2))
  }
}

function distance(x1, y1, x2, y2) {
  let dis = Math.sqrt(
    abs(x1-x2) * abs(x1-x2) +
    abs(y1-y2) * abs(y1-y2)
  )
  return dis.toFixed(2)
}

function abs(n) {
  if (n < 0) {
    return -n
  }
  return n
}
