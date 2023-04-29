// 2751번 | 수 정렬하기 2
// https://www.acmicpc.net/problem/2751
// 1. 일반 풀이 | 2. 퀵 정렬 | 3. 합병 정렬

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const arr = input.slice(1);

arr.sort((a, b) => a - b);
console.log(arr.join("\n"));

/* 퀵 정렬
// 정렬 함수
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else if (arr[i] > pivot)right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

// 숫자 입력받기
const input = require("fs")
  .readFileSync(__dirname + "/practice.txt")
  .toString()
  .split("\n")
  .map(Number);
[N, ...arr] = input;

const result = quickSort(arr);

console.log(result.join("\n")); 
*/

/* 합병 정렬 
정렬 함수
const merge = (left, right) => {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

// 숫자 입력받기
const input = require("fs")
  .readFileSync(__dirname + "/practice.txt")
  .toString()
  .split("\n")
  .map(Number);
[N, ...arr] = input;

const result = mergeSort(arr);
console.log(result.join("\n"));
*/
