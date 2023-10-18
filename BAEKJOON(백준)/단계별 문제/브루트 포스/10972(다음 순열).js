// 10972번 | 다음 순열
// 문제 : https://www.acmicpc.net/problem/10972
// 참고 : https://tesseractjh.tistory.com/154

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

// 입력받기
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");
[N, ...arr] = input;
arr = arr[0].split(" ").map(Number);

const solve = (N, arr) => {
  const arrDesc = [...arr].sort((a, b) => b - a);
  if (arr.every((v, i) => v === arrDesc[i])) {
    console.log(-1);
  } else {
    let i = N - 2;
    while (arr[i] > arr[i + 1]) {
      i--;
    }
    let j = N - 1;
    while (arr[i] > arr[j]) {
      j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(
      [...arr.slice(0, i + 1), ...arr.slice(i + 1).sort((a, b) => a - b)].join(
        " "
      )
    );
  }
};

solve(N, arr);
