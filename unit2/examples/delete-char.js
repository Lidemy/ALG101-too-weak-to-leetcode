let str = "hello"
let deleted = 'l'
let ans = ''
for(let i=0; i<str.length; i++) {
  if (str[i] !== deleted) {
    ans += str[i]
  }
}
console.log(ans)