function solution(s) {
  return (s.length === 4 || s.length === 6) && s.split('').map((x) => x*1).every((x) => !isNaN(x));
}

console.log(solution("a123"));