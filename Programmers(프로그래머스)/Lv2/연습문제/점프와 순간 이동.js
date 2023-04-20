// 프로그래머스 LV2 - 점프와 순간 이동
// https://school.programmers.co.kr/learn/courses/30/lessons/12980

// 정확성 테스트의 케이스 18개 중 18개 성공
// 효율성 테스트의 케이스 10개 중 10개 성공
// 총점 100.0

function solution(n) {
  let battery = 0;
  while (n > 1) {
    battery += n % 2; // n이 홀수인 경우 battery++
    n = Math.floor(n / 2); // n = n을 2로 나눈 정수 몫
  }
  battery += n;
  return battery;
}

console.log(solution(7));
