for (let i=0; i<n; i++) {
  if (isPrime(arr[i])){
    console.log("Prime")
  } else {
    console.log("Composite")
  }
}

function isPrime(n) {
  if (n === 1) return false
  for (let i=2; i<n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}