// 프로그래머스 LV2 - 타겟 넘버
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0; // 답

  function dfs(num, count) {
    // 재귀함수
    if (count === numbers.length) {
      // count가 numbers의 길이와 같다면(= 모든 수에 연산을 실행했다면)
      if (num === target) answer++; // num(연산 결과값)이 target과 같다면 answer 값을 1씩 증가
      return;
    }

    // 숫자를 더하거나 뺄 때 dfs 재귀함수를 실행
    dfs(num + numbers[count], count + 1);
    dfs(num - numbers[count], count + 1);
  }

  // 첫 숫자부터 +와 -를 적용할 수 있기 때문에, 0부터 시작
  dfs(0, 0);

  return answer;
}
