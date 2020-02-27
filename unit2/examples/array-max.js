let arr = [2, 7, 5]
let max = arr[0]
for (let i=0; i<arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
console.log(max)

/*

1. 假設 arr 為 [2, 7, 5]
2. 設 max 為 arr[0]，也就是 2
3. 讓 i 從 0 跑到 2
4. i 現在是 0
5. 判斷 arr[0] 是否 > 2
6. 不是
7. 下一圈迴圈
8. i 現在是 1
9. 判斷 arr[1] 是否 > 2
10. 是，設 max 為 arr[1]，也就是 7
11. 下一圈迴圈
12. i 現在是 2
13. 判斷 arr[2] 是否 > 2
14. 不是
15. 下一圈迴圈
16. i 現在是 3，超出條件，結束
17. 輸出 max


*/