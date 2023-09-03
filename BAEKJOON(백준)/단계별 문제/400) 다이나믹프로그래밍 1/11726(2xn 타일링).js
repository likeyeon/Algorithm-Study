// 11726번 | 2xn 타일링
// 문제 : https://www.acmicpc.net/problem/11726

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

let N = fs.readFileSync(readFileSyncAddress).toString().trim();

const dp = {
  1: 1,
  2: 2,
};

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[N]);
