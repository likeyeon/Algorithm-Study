// 1874번 | 수열
// https://www.acmicpc.net/problem/1874

const [N, ...input] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((val) => Number(val));

function solution(N, input) {
  let stack = [];
  let temp_arr = [];
  let answer = [];
  let idx = 0;
  let i = 1;

  while (temp_arr.length < N && i - 1 <= N) {
    if (stack[stack.length - 1] === input[idx]) {
      temp_arr.push(stack.pop());
      answer.push("-");
      idx++;
    } else {
      stack.push(i);
      answer.push("+");
      i++;
    }
  }
  console.log(temp_arr.length === N ? answer.join("\n") : "NO");
}

solution(N, input);
