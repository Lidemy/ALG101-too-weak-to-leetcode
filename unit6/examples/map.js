function double(n) {
  return n*2
}

let arr = [1, 2, 3]
let newArr = arr.map(double)
//console.log(arr, newArr)

function map(arr, callback) {
  let result = []
  for(let i=0; i<arr.length; i++) {
    result[i] = callback(arr[i])
  }
  return result
}

console.log(map([1, 2, 3], double))

