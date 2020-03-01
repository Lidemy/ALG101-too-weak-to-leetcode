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

/*

1. 設 ans 為空字串
2. 迴圈第一圈，i 會從 0~4
3. i=0
4. code = str[0] 的 charcode = 104
5. 判斷是否是小寫
6. 是
7. ans += 'H'
8. 下一圈迴圈，i=1
9. code = str[1] = 69
10. 判斷是否是小寫
11. 判斷是否是大寫
12. 是，ans += 'e'
13. 下一圈迴圈，i=2
14. code = str[2] = 76
15. 判斷是否是小寫
16. 判斷是否是大寫
17. 是，ans += 'l'
18. 下一圈迴圈，i=3
19. code = str[3] = 76
20. 判斷是否是小寫
21. 判斷是否是大寫
22. 是，ans += 'l'
23. 下一圈迴圈，i=4
24. code = str[4] = 111
25. 判斷是否是小寫
26. 是，ans += 'O'
27. 下一圈迴圈，i=5
28. 迴圈結束
29. 印出 ans


*/