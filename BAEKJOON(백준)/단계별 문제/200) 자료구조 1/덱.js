// 10866번 | 덱
// 문제 : https://www.acmicpc.net/problem/10866

const fs = require("fs");

// 백준 제출 시 주석 제거
// const readFileSyncAddress = '/dev/stdin'

// VSC 테스트 시 주석 제거
const readFileSyncAddress = __dirname + "/input.txt";

const [N, ...input] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

class Deque {
  constructor() {
    this.arr = [];
  }

  push_front(val) {
    this.arr.unshift(val);
  }

  push_back(val) {
    this.arr.push(val);
  }

  pop_front() {
    return this.empty() ? -1 : this.arr.shift();
  }
  pop_back() {
    return this.empty() ? -1 : this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  empty() {
    return this.size() ? 0 : 1;
  }

  front() {
    return this.empty() ? -1 : this.arr[0];
  }

  back() {
    return this.empty() ? -1 : this.arr[this.arr.length - 1];
  }
}

let deque = new Deque();
let answer = [];

for (let i = 0; i < N; i++) {
  const [cmd, val] = input[i].split(" ");
  switch (cmd) {
    case "push_front":
      deque.push_front(val);
      break;
    case "push_back":
      deque.push_back(val);
      break;
    case "pop_front":
      answer.push(deque.pop_front());
      break;
    case "pop_back":
      answer.push(deque.pop_back());
      break;
    case "size":
      answer.push(deque.size());
      break;
    case "empty":
      answer.push(deque.empty());
      break;
    case "front":
      answer.push(deque.front());
      break;
    case "back":
      answer.push(deque.back());
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
