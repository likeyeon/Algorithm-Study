const [N, ...input] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(element) {
    this.storage[this.index++] = element;
  }

  pop() {
    if (this.size() <= 0) return -1;
    else {
      let removed = this.storage[--this.index];
      delete this.storage[this.index];
      return removed;
    }
  }

  size() {
    return this.index;
  }

  empty() {
    return this.index <= 0 ? 1 : 0;
  }

  top() {
    let top = this.storage[this.index - 1];
    return top ? top : -1;
  }
}

let stack = new Stack();
function solution(N, input) {
  let answer = "";

  for (let i = 0; i < N; i++) {
    const order = input[i].split(" ");
    switch (order[0]) {
      case "push":
        stack.push(Number(order[1]));
        break;
      case "pop":
        answer += stack.pop() + " ";
        break;
      case "size":
        answer += stack.size() + " ";
        break;
      case "empty":
        answer += stack.empty() + " ";
        break;
      case "top":
        answer += stack.top() + " ";
        break;
      default:
        break;
    }
  }

  console.log(answer.split(" ").join("\n"));
}

solution(N, input);
