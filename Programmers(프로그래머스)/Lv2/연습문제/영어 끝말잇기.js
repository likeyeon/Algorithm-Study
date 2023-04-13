// 프로그래머스 LV2 - 영어 끝말잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

// (첫번째 시도) 정확성 테스트의 케이스 25개 중 23개 성공
// (두번째 시도) 정확성 테스트의 케이스 25개 중 25개 성공
// 효율성 테스트는 없었음
// 총점 100.0

function solution(n, words) {
  let answer = [0, 0]; // 탈락자가 생기지 않는다면 [0, 0] 반환

  for (let i = 1; i < words.length; i++) {
    if (
      // 탈락자 발생 조건
      words[i].slice(0, 1) !== words[i - 1].slice(-1) || // 1. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어가 아닐 경우
      words.indexOf(words[i]) !== i // 2. 이전에 등장했던 단어일 경우
    ) {
      answer = [(i % n) + 1, Math.ceil((i + 1) / n)]; //[가장 먼저 탈락하는 사람의 번호, 자신의 몇번째 차례에 탈락하는지]
      break;
    }
  }

  return answer;
}

console.log(
  solution(2, ["hello", "one", "even", "one", "one", "world", "draw"])
);
