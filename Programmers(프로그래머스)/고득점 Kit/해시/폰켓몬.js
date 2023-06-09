// 프로그래머스 LV1 - 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 정확성 테스트의 케이스 20개 중 20개 성공
// 효율성 테스트는 없었음
// 총점 100.0

function solution(nums) {
  const n = new Set(nums).size; // 중복되지 않는 종의 수를 구함
  return nums.length/2 > n ? n : nums.length/2;
  // 1. n/2가 종의 수보다 크면 종의 수만큼 출력
  // 2. 아니라면(=n/2가 종의 수보다 작다면) n/2를 출력
}

console.log(solution([3,1,2,3]));