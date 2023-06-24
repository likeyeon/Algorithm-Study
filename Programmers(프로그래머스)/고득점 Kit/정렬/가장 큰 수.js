// 프로그래머스 LV2 - 가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const answer = numbers
    .map((number) => String(number)) // 원소 값들을 int -> string 형변환
    .sort((a, b) => b + a - (a + b)) // 앞 뒤의 원소들을 뒤+앞 vs 앞+뒤 로 비교하여 내림차순으로 정렬
    .join(""); // 배열의 원소들을 합침

  // 배열의 값들이 0으로 이루어진 경우, 삼항연산자를 사용하여 "0"으로 반환
  return answer[0] === "0" ? "0" : answer;
}
