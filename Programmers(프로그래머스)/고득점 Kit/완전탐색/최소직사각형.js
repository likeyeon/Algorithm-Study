// 프로그래머스 LV1 - 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 정확성 테스트의 케이스 20개 중 20개 성공
// 효율성 테스트는 없었음
// 총점 100.0

function solution(sizes) {
  let w = []; // 가로 길이 배열
  let h = []; // 세로 길이 배열

  sizes.map((arr) => arr.sort((a, b) => b - a)); // 각 배열 안의 요소를 내림차순으로 정렬
  for (let i=0; i<sizes.length; i++){
    w.push(sizes[i][0]); // 큰 값을 w 배열에 추가
    h.push(sizes[i][1]); // 작은 값을 h 배열에 추가 
  }

  return Math.max(...w) * Math.max(...h); // w 배열 중 가장 큰 값 * h 배열 중 가장 큰 값 반환
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));