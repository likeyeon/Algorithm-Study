// 10819번 | 차이를 최대로
// 문제 : https://www.acmicpc.net/problem/10819
// 참고 : https://tesseractjh.tistory.com/237

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

[N, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

input = input[0].split(" ").map((v) => +v);
N = +N;

const solve = () => {
  let max = 0;
  const arr = [];
  const selected = Array(N).fill(false); // 이전에 선택한 수인지 체크하기 위한 배열
  const recursion = () => {
    if (arr.length === N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum += Math.abs(arr[i] - arr[i + 1]);
      }
      if (max < sum) max = sum;
    } else {
      for (let i = 0; i < N; i++) {
        if (selected[i]) {
          continue;
        }
        arr.push(input[i]);
        selected[i] = true;
        recursion();
        arr.pop();
        selected[i] = false;
      }
    }
  };
  recursion();
  console.log(max);
};

solve();
