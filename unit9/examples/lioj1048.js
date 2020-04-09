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
  let arr = []
  for(let i=1; i<lines.length; i++) {
    arr.push(Number(lines[i]))
  }

  let max = -Infinity
  // 更新：影片中這邊初始值為 arr[0]，應該要改成 0
  let currentSum = 0
  // 更新：影片中這邊 i=1，應該要改成 i=0
  for(let i=0; i<arr.length; i++) {
    if (arr[i] + currentSum > arr[i]) {
      currentSum += arr[i]
    } else {
      currentSum = arr[i]
    }
    if (currentSum > max) {
      max = currentSum
    }
  }
  console.log(max)
}
