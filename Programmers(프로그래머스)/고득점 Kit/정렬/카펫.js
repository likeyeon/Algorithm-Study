// 프로그래머스 LV2 - 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  let n = brown + yellow;
  let divisor = [];

  for (let i = 1; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) divisor.push([n / i, i]);
  }

  for (let i = 0; i < divisor.length; i++) {
    if ((divisor[i][0] - 2) * (divisor[i][1] - 2) === yellow) return divisor[i];
  }
}
