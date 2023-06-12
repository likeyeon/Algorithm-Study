// 프로그래머스 LV2 - 다리를 지나는 트럭
// https://school.programmers.co.kr/learn/courses/30/lessons/42583

// 정확성: 100.0
// 총점 100.0

function solution(bridge_length, weight, truck_weights) {
  let bridge = Array.from({ length: bridge_length }, (x) => 0); // 다리 위에 올라간 트럭 배열

  // 대기열에서 트럭을 꺼내 다리 위로 올리고 첫 1초가 지난다.
  bridge.shift();
  let weight_sum = truck_weights[0]; // 현재 다리 위에 있는 트럭의 무게 총합
  bridge.push(truck_weights.shift());
  let answer = 1; // 경과 시간(= 답)

  while (weight_sum > 0) {
    answer++; // 시간 1초 경과
    weight_sum -= bridge.shift(); // 큐의 맨 앞을 꺼내줌

    // 만약 현재 다리에 큐의 맨 앞 트럭의 무게를 더해줬는데 버틸 수 있다면?
    if (truck_weights.length > 0 && weight_sum + truck_weights[0] <= weight) {
      weight_sum += truck_weights[0];
      bridge.push(truck_weights.shift()); // 큐에서 맨 앞 트럭을 현재 다리 위에 올린다
    } else {
      // 아니라면 다리에 0을 추가
      bridge.push(0);
    }
  }

  return answer;
}

// console.log(solution(2, 10, [7, 4, 5, 6]));
