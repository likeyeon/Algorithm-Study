function solution(array, commands) {
  let answer = [];

  for(let i=0; i<commands.length; i++) // commands의 길이만큼 반복
    answer.push((array.slice(commands[i][0]-1,commands[i][1])).sort((a,b)=>a-b)[commands[i][2]-1]);
    // slice를 이용해 i부터 j만큼 array를 슬라이싱
    // 슬라이싱한 후, sort로 array 오름차순 정렬
    // 정렬된 array에서 k에 해당하는 수를 찾아 answer에 push
  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));