function solution(A, B) {
  let answer = [];
  for (let i=0; i<A.length; i++){
    let arr = [];
    for (let j=0; j<A[0].length; j++)
      arr.push(A[i][j]+B[i][j]);
    answer.push(arr);
  }
  return answer;
}