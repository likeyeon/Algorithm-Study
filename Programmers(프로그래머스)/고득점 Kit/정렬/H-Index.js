// 프로그래머스 LV2 - H-Index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  const arr = citations.sort((a, b) => b - a); // 내림차순 정렬
  for (let i = arr.length; i > 0; i--) {
    // 가장 큰 논문의 갯수부터 차례로 비교
    if (arr.filter((val) => val >= i).length >= i)
      // 최소 i번 이상 인용된 논문의 수를 구함
      return i; // 최소 i번 이상 인용된 논문의 수 >= i 일 경우 return
  }
  return 0;
}
