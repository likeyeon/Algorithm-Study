// 1463번 | 1로 만들기
// 문제 : https://www.acmicpc.net/problem/1463
// 참고 : https://webruden.tistory.com/1035
const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// 프로그래머스
const readFileSyncAddress = __dirname + "/input.txt";

let N = fs.readFileSync(readFileSyncAddress).toString().trim();

const dp = new Array(Number(N) + 1).fill(0);

for (let i = 2; i < dp.length; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}

console.log(dp[N]);
