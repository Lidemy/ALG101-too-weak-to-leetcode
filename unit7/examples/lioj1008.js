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
  let n = Number(lines[0])
  let sum = 0
  while(n>0) {
    sum += n&1
    n >>= 1
  }
  console.log(sum)
}

// 轉成二進位
function solveTwo(lines) {
  let n = Number(lines[0])
  let sum = 0
  let str = n.toString(2)
  for(let i=0; i<str.length; i++) {
    if (str[i] === '1') {
      sum++
    }
  }
  console.log(sum)
}

// 最原始的解法
function solveOriginal(lines) {
  let n = Number(lines[0])
  let arr = []
  for(let i=1; i<=2**31; i*=2) {
    arr.push(i)
  }
  let sum = 0
  for(let i=arr.length-1; i>=0; i--) {
    if (arr[i] <= n) {
      n-=arr[i]
      sum++
    }
  }
  console.log(sum)
}

