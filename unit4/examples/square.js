for (let i=1; i<=100; i++) {
  if (isSquare(i)) {
    console.log(i)
  }
}

function isSquare(n) {
  let root = Math.floor(Math.sqrt(n))
  return root * root === n
}

/*

let i=1
while(i*i <= 100) {
  console.log(i*i)
  i++
}

*/