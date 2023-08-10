// 1406번 | 에디터
// 문제 : https://www.acmicpc.net/problem/1406
// 벨로그 풀이 : https://velog.io/@likeyeon/백준-1406번-에디터-nodejs

const [S, N, ...input] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let l_stack = [...S]; // 처음 시작할 때 커서가 맨 뒤에 있으므로, 문자열을 왼쪽 스택에 넣어준다.
let r_stack = [];

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(" ");
  if (command === "L" && l_stack.length) r_stack.push(l_stack.pop());
  else if (command === "D" && r_stack.length) l_stack.push(r_stack.pop());
  else if (command === "B" && l_stack.length) l_stack.pop();
  else if (command === "P") l_stack.push(value);
}

// 두 개의 스택을 합치기 전, 오른쪽 스택의 순서가 뒤집혀 있으므로 reverse()를 이용해 순서를 되돌려놓는다.
const answer = l_stack.concat(r_stack.reverse()).join("");
console.log(answer);
