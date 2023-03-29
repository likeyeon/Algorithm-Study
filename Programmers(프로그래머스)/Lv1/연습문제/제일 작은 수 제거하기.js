function solution(arr) {
  let min = arr[0];
  for (let i=1; i<arr.length; i++)
    if (arr[i] < min)
      min = arr[i];
  const answer = arr.filter(x => x !== min);
  return answer.length ? answer : [-1]; 
}