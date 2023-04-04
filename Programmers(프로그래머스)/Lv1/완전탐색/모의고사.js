// 프로그래머스 LV1 - 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

// 정확성 테스트의 케이스 14개 중 14개 성공
// 효율성 테스트는 없었음
// 총점 100.0

function solution(answers) {
  const a = [1,2,3,4,5];
  const b = [2,1,2,3,2,4,2,5];
  const c = [3,3,1,1,2,2,4,4,5,5];

  let arr = [];
  arr.push(answers.reduce((acc, val, idx) => val === a[idx%a.length] ? acc += 1 : acc += 0, 0));
  arr.push(answers.reduce((acc, val, idx) => val === b[idx%b.length] ? acc += 1 : acc += 0, 0));
  arr.push(answers.reduce((acc, val, idx) => val === c[idx%c.length] ? acc += 1 : acc += 0, 0));
  
  let winners = [];
  arr.forEach((val, idx, arr) => {
    if (val === Math.max(...arr)) winners.push(idx + 1);
  })
  
  return winners;
}

console.log(solution([1,2,3,4,5]));