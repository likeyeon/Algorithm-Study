// 프로그래머스 LV1 - 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 정확성: 58.3
// 효율성: 41.7
// 총점 100.0

function solution(participant, completion) {
  const map = new Map(); // Map 객체 생성

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    map.set(a, (map.get(a) || 0) + 1); // 참가자의 값을 +1
    map.set(b, (map.get(b) || 0) - 1); // 완주자의 값을 -1
  }

  for (let [x, y] of map) {
    if (y > 0) return x; // 참가자의 값이 0 초과(=완주를 하지 못함) => 해당 참가자 이름 출력
  }
}

console.log(solution(["leo", "kii", "eden"], ["eden", "kiki"]));
