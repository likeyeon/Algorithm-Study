function solution(nums) {
  let arr = []; // 3개의 수를 더했을 때 나오는 모든 합을 모아둔 배열
  let answer = []; // 소수인 합들의 개수
  // for문으로 각기 다른 경우의 3개의 수를 더한 합들을 구함
  for (let i = 0; i < nums.length - 2; i++)
    for (let j = i + 1; j < nums.length - 1; j++)
      for (let k = j + 1; k < nums.length; k++) {
        if (!(i === j || j === k || i === k))
          arr.push(nums[i] + nums[j] + nums[k]);
      }

  // 소수가 아닌 경우를 빼 소수의 개수를 구함
  answer = arr.length;
  for (let i = 0; i < arr.length; i++)
    for (let j = 2; j <= Math.sqrt(arr[i]); j++)
      if (arr[i] % j === 0) {
        answer--;
        break;
      }

  return answer;
}

console.log(solution([1, 2, 3, 4]));
