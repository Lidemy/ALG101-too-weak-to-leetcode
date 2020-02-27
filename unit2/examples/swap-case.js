let str = "hELLo"
let ans = ''
for(let i=0; i<str.length; i++) {
  let code = str.charCodeAt(i)
  if (code >= 97 && code <= 122) {
    ans += String.fromCharCode(code - 32)
  } else if (code >= 65 && code <= 90) {
    ans += String.fromCharCode(code + 32)
  } else {
    ans += str[i]
  }
}
console.log(ans)