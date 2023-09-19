// 11053번 | 가장 긴 증가하는 부분 수열
// 문제 : https://www.acmicpc.net/problem/11053
// 참고 : https://source-sc.tistory.com/14

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

// LIS(Longest Increasing Subsequence Algorithm) 최장증가수열 알고리즘 문제
// 주어진 배열을 arr[], 값을채워나갈 배열을 dp[] 라고 하자.
// dp[i] 를  "arr[i]를 마지막 원소로 갖을때 최대증가수열 값" 이라고 정의하자.

const [N, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

arr = input[0].split(" ").map((val) => val * 1);
let dp = Array.from({ length: N * 1 }, (v) => 0);
let max = 1;

for (let i = 0; i < N; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
      dp[i] = dp[j] + 1;
      if (max < dp[i]) {
        max = dp[i];
      }
    }
  }
}

console.log(max);
