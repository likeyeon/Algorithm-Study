function solution(priorities, location) {
  let tempArr = priorities.map((val, idx) => (val = idx)); // priorities 배열을 복사하여 임의값을 index로 설정한 배열
  let queue = []; // 실행 순으로 정렬할 배열

  while (priorities.length !== 0) {
    // 만약 첫번째 요소의 우선순위가 가장 크다면?
    // 첫 번째 요소를 꺼내 큐에 삽입
    if (priorities[0] === Math.max(...priorities)) {
      queue.push(tempArr.shift());
      priorities.shift();
    }
    // 우선순위가 더 높은 요소가 있다면?
    // 방금 꺼낸 첫 번째 요소를 다시 맨 뒤에 삽입
    else {
      priorities.push(priorities.shift());
      tempArr.push(tempArr.shift());
    }
  }

  // 큐에서 몇 번째로 실행되는지 알고싶은 요소의 위치를 반환
  return queue.indexOf(location) + 1;
}

// console.log(solution([2, 1, 3, 2], 2));
