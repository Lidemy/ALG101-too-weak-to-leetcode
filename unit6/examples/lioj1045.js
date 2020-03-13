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
  console.log(slice(lines[0], Number(lines[1]), Number(lines[2])))
}

// LIOJ 1045：String slice
function slice(str, beginIndex, endIndex) {
  let result = ''
  for(let i=beginIndex; i<endIndex; i++) {
    result += str[i]
  }
  return result
}