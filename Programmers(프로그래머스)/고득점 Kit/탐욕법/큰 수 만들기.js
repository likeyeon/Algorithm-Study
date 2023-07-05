// 프로그래머스 LV2 - 큰 수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  let stack = [];
  // 시간 효율을 위해 pop()을 사용하려면, 미리 원본 숫자의 순서를 뒤집어준다.
  let arr = number.split("").reverse();

  while (arr.length) {
    stack.push(arr.pop());
    while (stack[stack.length - 1] < arr[arr.length - 1] && k > 0) {
      stack.pop();
      k -= 1;
    }
  }

  // 앞의 숫자가 뒤의 숫자보다 작은 경우가 없는 케이스
  if (k !== 0) stack.splice(-k, k);

  return stack.join("");
}
