// 10974번 | 모든 순열
// 문제 : https://www.acmicpc.net/problem/10974
// 참고 : https://lhoiktiv.tistory.com/446

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

// 입력 받기
const N = fs.readFileSync(readFileSyncAddress).toString().trim() * 1;
const answer = [];

const solve = (arr) => {
  if (arr.length === N) {
    answer.push(arr.join(" "));
    return;
  } else {
    for (let i = 1; i <= N; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        solve(arr);
        arr.pop();
      }
    }
  }
};

solve([]);
console.log(answer.join("\n"));
