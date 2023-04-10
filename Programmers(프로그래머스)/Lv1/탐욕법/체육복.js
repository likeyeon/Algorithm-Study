// 프로그래머스 LV1 - 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 정확성 테스트의 케이스 25개 중 25개 성공
// 효율성 테스트는 없었음
// 총점 100.0

function solution(n, lost, reserve) {
  let clothes = new Array(n).fill(1); // 모든 학생들이 처음에 체육복을 가지고 있으므로 체육복 수 1로 세팅
  lost.map((lost) => (clothes[lost - 1] = 0)); // 체육복을 도난 당한 학생의 체육복 수를 0으로 변환
  reserve.map((reserve) => (clothes[reserve - 1] += 1)); // 여벌의 체육복을 가지고 있는 학생의 체육복 수에 1을 더해줌

  // 체육복이 없는 학생의 앞 사람이나 뒷 사람이 여벌의 체육복을 가지고 있는 경우 체육복 수 1로 변환
  // 여벌의 체육복을 나눠준 학생의 경우 체육복 수 1로 변환
  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    } else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }
  // 최종 체육복 소지한 학생의 수 반환
  return clothes.filter((x) => x >= 1).length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
