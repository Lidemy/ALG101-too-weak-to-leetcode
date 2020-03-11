for(let i=1; i<=n; i++) {
  printLayer(i, n)
}

function printLayer(i, n) {
  // 空白 + 星星
  let str = repeat(' ', n - i)+ repeat('*', 2*i - 1)
  console.log(str)
}

function repeat(str, n) {
  let s = ''
  for (let i=1; i<=n; i++) {
    s += str
  }
  return s
}