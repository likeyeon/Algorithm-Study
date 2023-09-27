// 1699번 | 제곱수의 합
// 문제 : https://www.acmicpc.net/problem/1699
// 참고 : https://amunre21.github.io/boj/2-1699/

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

const N = fs.readFileSync(readFileSyncAddress).toString().trim() * 1;

let dp = Array.from({ length: N + 1 }, (val, idx) => idx);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[N]);
