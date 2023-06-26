// 프로그래머스 LV2 - 소수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/42839

const getCombinations = (numbers, n) => {
  const results = [];
  if (n === 1) return numbers.map((el) => [el]);

  // 첫번째 원소를 제외한 순열을 구한다.
  numbers.forEach((fixed, idx, arr) => {
    // 해당하는 fixed를 제외한 나머지 원소의 배열
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    // 나머지 조합
    const combinations = getCombinations(rest, n - 1);
    // 떼어놓았던 fixed에 나머지 조합 붙이기
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

const isPrime = (num) => {
  if (num < 2) return false; // 0과 1은 소수가 아니다.
  if (num === 2) return true; // 2는 짝수 중 유일한 소수이다.
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(numbers) {
  // 반복문으로 재귀 함수를 사용하여 모든 조합을 구한다.
  let arr = [];
  numbers = [...numbers];
  for (let i = 1; i <= numbers.length; i++) {
    arr.push(...getCombinations(numbers, i));
  }

  // 배열 안의 모든 문자들을 정수로 변환하고 중복 제거
  arr = arr.map((n) => Number(n.join("")));
  arr = [...new Set(arr)];

  //소수 구하기
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    isPrime(arr[i]) ? answer.push(arr[i]) : "";
  }

  return answer.length;
}
