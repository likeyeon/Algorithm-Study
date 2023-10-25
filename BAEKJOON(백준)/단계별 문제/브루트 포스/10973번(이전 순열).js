// 10973번 | 이전 순열
// 문제 : https://www.acmicpc.net/problem/10973

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

// 입력받기
[N, ...arr] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");
arr = arr[0].split(" ").map(Number);

const solve = (N, arr) => {
  const arrAsc = [...arr].sort((a, b) => a - b);
  if (arr.every((v, i) => v === arrAsc[i])) {
    console.log(-1);
  } else {
    let i = N - 2;
    while (arr[i] < arr[i + 1]) i--;
    let j = N - 1;
    while (arr[i] < arr[j]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(
      [...arr.slice(0, i + 1), ...arr.slice(i + 1).sort((a, b) => b - a)].join(
        " "
      )
    );
  }
};

solve(N, arr);
