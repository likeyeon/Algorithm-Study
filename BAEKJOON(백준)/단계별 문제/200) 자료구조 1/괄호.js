// 9012번 | 괄호
// https://www.acmicpc.net/problem/9012

const [N, ...input] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(N, input) {
  const VPS = "()";

  for (let i = 0; i < N; i++) {
    // 문자열이 VPS를 포함하지 않을 때까지 계속 반복
    // replaceAll()을 사용해 모든 VPS를 빈 공간으로 대체
    while (input[i].includes(VPS)) {
      input[i] = input[i].replaceAll(VPS, "");
    }
    // 최종적으로 빈 문자열인 경우, 올바른 괄호 문자열이므로 YES를 반환. 반대의 경우 NO를 반환
    console.log(input[i] === "" ? "YES" : "NO");
  }
}

solution(N, input);
