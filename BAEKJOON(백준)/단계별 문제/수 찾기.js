// 1920번 | 수 찾기
// https://www.acmicpc.net/problem/1920

// 배열에서 특정 정수가 존재하는지 찾는 함수
function searchNum(array, target, start, end) {
  while (end >= start) {
    mid = start + Math.floor((end - start) / 2);

    // 타겟이랑 중간점 같을 때
    if (target === array[mid]) {
      return 1;
    }
    // 타겟 > 중간점
    else if (target > array[mid]) {
      start = mid + 1;
    }
    // 타겟 < 중간점
    else {
      end = mid - 1;
    }
  }
  return 0;
}

// 숫자 입력받기
const input = require("fs")
  .readFileSync(__dirname + "/practice.txt")
  .toString()
  .split("\n");
const [N, A, M, arrM] = input.map((v) => v.split(" ").map((x) => Number(x)));

A.sort((a, b) => a - b);

// arrM의 각 요소의 검사 결과값을 저장
const result = arrM.map((v) => searchNum(A, v, 0, N - 1));

console.log(result.join("\n"));
