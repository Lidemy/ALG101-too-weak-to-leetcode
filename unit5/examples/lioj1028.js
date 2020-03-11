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
  let temp = lines[0].split(' ')
  // 1991117
  let num = Number(temp[0] + temp[1] + temp[2])
  let p = addDigits(num) // p: 29
  while(p >= 10) {
    p = addDigits(p)
  }
  console.log(p)
}

function addDigits(n) {
  let sum = 0
  while(n != 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}
