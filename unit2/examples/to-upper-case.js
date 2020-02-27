let str = "Hi"
let ans = ''
for(let i=0; i<str.length; i++) {
  let code = str.charCodeAt(i)
  if (code >= 97 && code <= 122) {
    ans += String.fromCharCode(code - 32)
  } else {
    ans += str[i]
  }
}
console.log(ans)

/*
  另一個範例：
  let str = "Hi"
  let ans = ''
  for(let i=0; i<str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      ans += String.fromCharCode(
        str.charCodeAt(i) - 32
      )
    } else {
      ans += str[i]
    }
  }
  console.log(ans)

  再一個：
  let str = "Hi"
  let ans = str.toUpperCase()
  console.log(ans)
*/