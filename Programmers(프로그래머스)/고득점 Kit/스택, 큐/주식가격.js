// 프로그래머스 Lv2 - 주식가격
// https://school.programmers.co.kr/learn/courses/30/lessons/42584

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const queue = new Queue();

  prices.forEach((val) => {
    queue.enqueue(val);
  });

  for (let i = 0; i < n; i++) {
    const temp = queue.dequeue();
    let sec = 0; // 가격이 떨어지지 않은 기간이 몇 초인지에 대한 변수
    for (let j = i + 1; j < n; j++) {
      sec++;
      // 가격이 떨어질 경우
      if (temp > prices[j]) {
        break;
      }
    }
    answer[i] = sec;
  }

  return answer;
}

// console.log(solution([1, 2, 3, 2, 3]));
