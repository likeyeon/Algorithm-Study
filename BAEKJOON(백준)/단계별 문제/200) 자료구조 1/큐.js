// 10845번 | 큐
// 문제 : https://www.acmicpc.net/problem/10845

const [N, ...input] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop() {
    return this.empty() ? -1 : this.arr.shift();
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
    return this.empty() ? -1 : this.arr[this.size() - 1];
  }
}

let answer = [];
let queue = new Queue();
for (let i = 0; i < N; i++) {
  const [command, data] = input[i].split(" ");
  switch (command) {
    case "push":
      queue.push(Number(data));
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
