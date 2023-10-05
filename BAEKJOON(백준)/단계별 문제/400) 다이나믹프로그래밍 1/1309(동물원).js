// 1309번 | 동물원
// 문제 : https://www.acmicpc.net/problem/1309
// 참고 : https://great-park.tistory.com/131

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

const N = fs.readFileSync(readFileSyncAddress).toString().trim() * 1;

const dp = new Array(N + 1);
dp[1] = 3;
dp[2] = 7;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}
console.log(dp[N]);
