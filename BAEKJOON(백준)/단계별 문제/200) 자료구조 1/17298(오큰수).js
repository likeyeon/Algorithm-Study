// 17298번 | 오큰수
// 문제 : https://www.acmicpc.net/problem/17298
// 참고 : https://poylib.tistory.com/40

const fs = require("fs");

// 백준
// const readFileSyncAddress = '/dev/stdin';

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

let [N, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

// sol1 - 시간 초과
/*
arr = arr.split(" ").map(Number);
let answer = [];

for (let i = 0; i < N; i++) {
  let flag = 0;
  if (i === N - 1) answer.push(-1);
  else {
    for (let j = i + 1; j < N; j++) {
      if (arr[i] < arr[j]) {
        answer.push(arr[j]);
        flag = 1;
        break;
      }
    }
    if (!flag) answer.push(-1);
  }
}
console.log(...answer);
*/

// sol2 - 스택 이용 통과
function solution(N, input) {
  let arr = input[0].split(" ").map(Number);
  let answer = Array.from({ length: N }, () => -1);
  let stack = [];
  for (let i = 0; i < N; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      answer[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return answer.join(" ");
}
console.log(solution(N, input));
