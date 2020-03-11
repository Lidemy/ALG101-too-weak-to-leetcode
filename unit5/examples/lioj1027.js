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
  let card = removeDash(lines[0])
  let sum = evenDigitsCount(card) + oddDigitsCount(card)
  let p = sum % 10
  if (p != 0) {
    p = 10 - p
  }

  if (p !== Number(card[15])) {
    console.log('INVALID')
  } else {
    if (card[0] === '5') {
      console.log('MASTER_CARD')
    } else {
      console.log('VISA')
    }
  }
}

function removeDash(str) {
  let result = ''
  for(let i=0; i<str.length; i++) {
    if (str[i] !== '-') {
      result += str[i]
    }
  }
  return result
}

// 偶數位加總
// 5412
function evenDigitsCount(card) {
  let sum = 0
  for(let i=1; i<=13; i+=2) {
    sum += Number(card[i])
  }
  return sum
}

function oddDigitsCount(card) {
  let sum = 0
  for(let i=0; i<=15; i+=2) {
    let p = Number(card[i]) * 2
    if (p >= 10) {
      p -= 9
    }
    sum += p
  }
  return sum
}