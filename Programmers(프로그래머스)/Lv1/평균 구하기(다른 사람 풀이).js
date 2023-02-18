function solution(arr) { 
  return arr.reduce((total, num) => total + num) / arr.length;
}