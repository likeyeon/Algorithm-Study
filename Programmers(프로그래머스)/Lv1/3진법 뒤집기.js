function solution(n) {
  let answer = [];
  while(n>0){
    answer.unshift(n%3);
    n = Math.floor(n/3);
  }
  return answer.reduce((acc, val, idx) => acc + val*Math.pow(3, idx));
}