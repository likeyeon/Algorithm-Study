function solution(arr) {
  let sum = 0;
  var average = 0;
  
  for (let i=0; i<arr.length; i++)
      sum += arr[i] // 배열의 요소들을 하나씩 더한다.

  return average = sum / arr.length; // 총합을 배열의 길이로 나눠 평균값을 반환한다.
}