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
  let numbers = []
  for(let i=1; i<lines.length; i++) {
    numbers.push(lines[i])
  }
  let arr = reverse(numbers)
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}

// [1, 2, 3]
function reverse(arr) {
  let result = []
  for(let i=arr.length - 1; i>=0; i--) {
    result.push(arr[i])
  }
  return result
}

