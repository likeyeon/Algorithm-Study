// 프로그래머스 LV2 - 스킬트리
// https://school.programmers.co.kr/learn/courses/30/lessons/49993

// 정확성 테스트의 케이스 14개 중 14개 성공
// 총점 100.0

function solution(skill, skill_trees) {
  let answer = 0;
  const regex = new RegExp(`[^${skill}]`, "g");
  skill_trees = skill_trees.map((x) => x.replace(regex, ""));

  for (let i = 0; i < skill_trees.length; i++) {
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skill_trees[i][j] !== skill[j]) {
        answer--;
        break;
      }
    }
    answer++;
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
