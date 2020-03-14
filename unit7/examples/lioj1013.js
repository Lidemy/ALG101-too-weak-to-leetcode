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
  console.log(f(n))
}

function f(n) {
  if (n === 2) return 1
  if (n === 3) return 2
  return f(n-1) + f(n-2)
}

function solveArr(lines) {
  let arr = [0, 1, 1, 2]
  // arr[n] = 到第 n 樓的方法有幾種
  for(let i=4; i<=20; i++) {
    arr[i] = arr[i-1] + arr[i-2]
  }
  let n = Number(lines[0])
  console.log(arr[n])
}


/*
2: 1
3: 2
4: 1+2 = 3
5: 2+3 = 5
6: 3+5 = 8

f(n) = f(n-1) + f(n-2)
*/
