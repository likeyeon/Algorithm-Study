// 프로그래머스 LV2 - 구명보트
// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b); // 내림차순 정렬
  while (people.length !== 0) {
    if (people[0] + people[people.length - 1] <= limit)
      // 가장 가벼운 사람 + 가장 무거운 사람의 합이 limit 이하일 경우
      people.splice(0, 1); // 가장 가벼운 사람도 태울 수 있음
    people.pop(); // limit를 초과하든 안하든, 가장 무거운 사람은 무조건 태워 보냄
    answer++;
  }
  return answer;
}
