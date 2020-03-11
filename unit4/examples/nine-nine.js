function printTable(k) {
  for (let i=1; i<=9; i++) {
    console.log(k + '*' + i + '=' + k*i)
  }
}

for(let k=1; k<=9; k++) {
  printTable(k)
}