// 9093번 | 단어 뒤집기
// https://www.acmicpc.net/problem/9093

const [N, ...input] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(N, input) {
  for (let i = 0; i < N; i++) {
    // 문장을 띄어쓰기 단위로 나눈 배열로 반환하여 저장
    // ex) I am happy today => [ 'I', 'am', 'happy', 'today' ]
    const words = input[i].split(" ");
    // 1. split() 메서드를 이용해 문자 단위로 나눔 'am' => ["a", "m"]
    // 2. reverse() 메서드를 이용해 배열의 순서를 뒤집음  ["a", "m"] => ["m", "a"]
    // 3. join() 메서드를 이용해 문자를 단어로 합침 ["m", "a"] => "ma"
    // 4. 모든 단어마다 1~3의 과정을 반복하였다면, join(" ")으로 합쳐 하나의 문장(=문자열)로 반환
    console.log(
      words.map((word) => word.split("").reverse().join("")).join(" ")
    );
  }
}

solution(N, input);
