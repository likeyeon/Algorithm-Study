// 2225번 | 합분해
// 문제 : https://www.acmicpc.net/problem/2225
// 참고 : https://webruden.tistory.com/1045

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

const [N, K] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(" ")
  .map((val) => val * 1);

// dp 세팅
// K === 1일 때, DP[1][N] = 1
// N === 1일 때, DP[K][1] = 1
const dp = [];
for (let i = 0; i <= K; i++) {
  dp[i] = new Array(N + 1).fill(i === 1 ? 1 : 0);
  dp[i][0] = 1;
}

// dp 점화식
// DP[K][N] = dp[K-1][N] + dp[K][N-1]
for (let i = 2; i <= K; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
  }
}
console.log(dp[K][N]);
