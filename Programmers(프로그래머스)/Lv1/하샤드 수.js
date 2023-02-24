function solution(x) {
  var sum = (x+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
  return x % sum === 0;
}