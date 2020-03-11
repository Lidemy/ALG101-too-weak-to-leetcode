for (let i=1; i<=N; i++) {
  printStar(i)
}

function printStar(n) {
  let s = ''
  for(let i=1; i<=n; i++) {
    s += '*'
  }
  console.log(s)
}