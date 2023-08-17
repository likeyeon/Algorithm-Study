// 10799번 | 쇠막대기
// 문제 : https://www.acmicpc.net/problem/10799
// 블로그 정리 : https://velog.io/@likeyeon/백준-node.js-10799번-쇠막대기

const fs = require("fs");

// 백준
// const readFileSyncAddress = '/dev/stdin';

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim();

const str = input.replaceAll("()", "L");

let bar = 0;
let cnt = 0;

for (let i in str) {
  switch (str[i]) {
    case "(":
      bar++;
      cnt++;
      break;
    case ")":
      bar--;
      break;
    case "L":
      cnt += bar;
      break;
    default:
      break;
  }
}

console.log(cnt);
