// 17299번 | 오등큰수
// 문제 : https://www.acmicpc.net/problem/17299

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

function solution(N, input) {
  let arr = input[0].split(" ").map(Number);
  let answer = [];
  let count = {};
  let stack = [];

  // 수열 A에서 각 원소가 등장한 횟수를 구함
  // count = { '1': 3, '2': 2, '3': 1, '4': 1 }
  for (let i = 0; i < N; i++) {
    if (!count[arr[i]]) count[arr[i]] = 1;
    else count[arr[i]]++;
  }

  // while 조건에 해당하는 경우 오등큰수를 할당.
  // answer = [, , 1, 2, 2, 1, ];
  for (let i = 0; i < N; i++) {
    while (
      stack.length &&
      count[arr[stack[stack.length - 1]]] < count[arr[i]]
    ) {
      answer[stack.pop()] = arr[i];
    }
    stack.push(i);
  }

  // 조건에 만족하지 않아 비어있는 answer의 인덱스에 -1을 할당
  // answer = [-1, -1, 1, 2, 2, 1, -1]
  while (stack.length !== 0) {
    answer[stack.pop()] = -1;
  }

  return answer.join(" ");
}

console.log(solution(N, input)); // ex) N=7, input=[ '1 1 2 3 4 2 1' ]
