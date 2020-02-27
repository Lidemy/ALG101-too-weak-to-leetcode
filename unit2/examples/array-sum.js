let arr = [1, 2, 3]
let sum = 0
for(let i=0; i<arr.length; i++) {
  sum += arr[i]
}
console.log(sum)

/*

1. 假設 array 為 [1, 2, 3]
2. 設 sum 為 0
3. 讓 i 從 0 跑到 n-1（也就是 2）
4. i 現在是 0
5. sum += arr[0]，sum 變成 1
6. 下一圈迴圈
7. i 現在是 1
8. sum += arr[1]，sum 變成 1+2=3
9. 下一圈迴圈
10. i 現在是 2
11. sum += arr[2]，sum 變成 3+3=6
12. 下一圈迴圈
13. i 現在是 3，超出 n-1，結束
14. 輸出 sum

*/