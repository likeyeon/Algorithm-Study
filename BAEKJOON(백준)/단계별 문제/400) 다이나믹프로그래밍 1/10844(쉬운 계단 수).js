// 10844번 | 쉬운 계단 수
// 문제 : https://www.acmicpc.net/problem/10844
// 참고 : https://wooono.tistory.com/642

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

// 입력값 받기
const N = fs.readFileSync(readFileSyncAddress).toString().trim();

// 2차원 배열 생성
const dp = new Array(N * 1 + 1).fill(0).map(() => new Array(10).fill(0));

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][1];
    else if (1 <= j && j <= 8)
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    else dp[i][j] = dp[i - 1][8];
  }
}
let sum = 0;

for (let i = 0; i < 10; i++) {
  sum += dp[N][i];
}

console.log(sum % 1000000000);
