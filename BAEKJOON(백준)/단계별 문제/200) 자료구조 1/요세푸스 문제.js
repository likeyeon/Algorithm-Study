// 1158번 | 요세푸스 문제
// 문제 : https://www.acmicpc.net/problem/1158
// 블로그 : https://velog.io/@likeyeon/백준-node.js-1158번-요세푸스-문제

const fs = require("fs");

// 백준 제출 시 주석 제거
// const readFileSyncAddress = '/dev/stdin';

// VSC 테스트 시 주석 제거
const readFileSyncAddress = __dirname + "/input.txt";

const [N, K] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(" ");

function solution(N, K) {
  let answer = [];
  let queue = Array.from({ length: N }, (v, i) => (v = ++i));

  let cnt = 1;
  while (queue.length > 0) {
    const shiftItem = queue.shift();
    if (cnt % K === 0) answer.push(shiftItem);
    else queue.push(shiftItem);
    cnt++;
  }

  return "<" + answer.join(", ") + ">";
}

console.log(solution(N, Number(K)));
