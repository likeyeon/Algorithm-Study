// 11052번 | 카드 구매하기
// 문제 : https://www.acmicpc.net/problem/11052

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

// 입력값 받기
const [N, input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const cost = [0, ...input.split(" ").map((v) => parseInt(v))];
const dp = new Array(Number(N) + 1).fill(0);

for (let i = 1; i <= N; i++) {
  dp[i] = cost[i];
  for (let j = 1; j < i; j++) {
    dp[i] = Math.max(dp[i], cost[j] + dp[i - j]);
  }
}

console.log(dp[N]);
