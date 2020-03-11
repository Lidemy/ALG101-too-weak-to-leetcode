// 判斷是否為等差數列
function isValid(arr) {
  if (arr.length <= 1) return true
  let d = arr[1] - arr[0]
  for(let i=1; i<arr.length; i++) {
    if (arr[i] - arr[i-1] !== d) {
      return false
    }
  }
  return true
}