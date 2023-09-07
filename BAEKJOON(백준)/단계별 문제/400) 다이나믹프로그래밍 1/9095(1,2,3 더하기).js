// 9095번 | 1,2,3 더하기
// 문제 : https://www.acmicpc.net/problem/9095

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

const [N, ...nums] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

let dp = {
  1: 1,
  2: 2,
  3: 4,
};

let answer = Array.from({ length: N }, (v) => 0);

for (let i = 0; i < N; i++) {
  for (let j = 4; j <= nums[i]; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  answer[i] = dp[nums[i]];
}

console.log(answer.join("\n"));
