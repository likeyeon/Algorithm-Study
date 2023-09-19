// 2193번 | 이친수
// 문제 : https://www.acmicpc.net/problem/2193

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

const N = fs.readFileSync(readFileSyncAddress).toString().trim();

let dp = Array.from({ length: N * 1 + 1 }, (v) => [0, 0]);
dp[1] = [0, 1];

for (let i = 2; i <= N; i++) {
  dp[i][0] = BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]);
  dp[i][1] = BigInt(dp[i - 1][0]);
}

const sum = String(dp[N][0] + dp[N][1]);
console.log(sum);
