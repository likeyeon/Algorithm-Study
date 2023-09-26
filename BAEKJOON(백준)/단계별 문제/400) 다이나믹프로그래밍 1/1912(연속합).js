// 1912번 | 연속합
// 문제 : https://www.acmicpc.net/problem/1912
// 참고 : https://leylaoriduck.tistory.com/534

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

let [N, ...nums] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

nums = nums[0].split(" ").map((val) => val * 1);
let dp = [nums[0]];

for (let i = 1; i < N; i++) {
  dp[i] = nums[i] > dp[i - 1] + nums[i] ? nums[i] : dp[i - 1] + nums[i];
}

console.log(Math.max(...dp));
