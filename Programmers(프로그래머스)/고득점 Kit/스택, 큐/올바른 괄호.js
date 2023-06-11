// 프로그래머스 LV2 - 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

// 정확성: 69.5
// 효율성: 30.5
// 총점 100.0

function solution(s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]); // arr의 맨 뒤에 s의 요소를 하나씩 추가
    // arr의 앞 뒤 요소가 차례로 "(", ")" 일 경우, 해당 요소 2개를 제거
    if (arr[arr.length - 1] === ")" && arr[arr.length - 2] === "(")
      arr.splice(-2, 2);
  }
  return arr.length === 0; // arr이 빈 배열(=올바른 괄호)인지 아닌지 여부를 반환
}

console.log(solution("())("));
