function solution(progresses, speeds) {
  let answer = []; // 정답 배열
  let funcNums = 1; // 배포 가능한 기능의 개수
  let maxDay = days[0]; //작업이 끝나기까지 남은 가장 큰 일수

  // 작업이 끝나기까지 각각 남은 일수
  let days = progresses.map((val, idx) => Math.ceil((100 - val) / speeds[idx]));

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      // 일수 최대값보다 작다면
      funcNums++; // 배포 가능 기능 개수 1 증가
    } else {
      // 일수 최대값보다 크다면
      answer.push(funcNums); // 배포 가능 기능 개수 값 정답 배열에 추가
      maxDay = days[i]; // 일수 최대값 갱신
      funcNums = 1; // 배포 가능 기능 개수 1로 초기화
    }
  }
  answer.push(funcNums);

  return answer;
}
