function addDigits(n) {
  if (n < 0) {
    n = n * -1
  }
  let sum = 0
  while(n != 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

console.log(addDigits(1)) // 1
console.log(addDigits(0)) // 0
console.log(addDigits(10)) // 1
console.log(addDigits(99)) // 18
console.log(addDigits(3412)) // 10
console.log(addDigits(-34)) // 7
