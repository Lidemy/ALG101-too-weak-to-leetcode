let arr = [10, 8, 6]
let min = Infinity
let min2 = Infinity
for(let i=0; i<arr.length; i++) {
  if (arr[i] < min) {
    min2 = min
    min = arr[i]
  } else if (arr[i] < min2) {
    min2 = arr[i]
  }
}
console.log(min, min2)
