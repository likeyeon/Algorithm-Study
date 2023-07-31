// 프로그래머스 LV2 - 더 맵게
// https://school.programmers.co.kr/learn/courses/30/lessons/42626

/* 1차 시도 : 효율성 실패 */
/*
function solution(scoville, K) {
  let answer = 0;
  scoville.filter((x) => x < K);

  // 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복
  while (Math.min(...scoville) < K && scoville.length !== 1) {
    scoville.sort((a, b) => a - b);
    scoville.push(scoville[0] + scoville[1] * 2);
    scoville = scoville.slice(2);
    answer++;
  }

  return Math.min(...scoville) < K ? -1 : answer;
}
*/

/* 2차 시도 : 힙 구현 */
class Heap {
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }

  insert(val) {
    this.items.push(val);
    let index = this.items.length - 1;
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      // 부모보다 자식이 작으면 자리 바꾸기
      if (this.items[index] < this.items[parentIndex]) {
        this.swap(index, parentIndex);
      } else break;
      index = parentIndex;
      if (index < 1) break;
    }
  }

  // bubbleDown 방식으로 가장 작은 노드 삭제
  // https://chamdom.blog/heap-using-js/
  removeMin() {
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    if (this.items.length <= 1) return;

    let index = 0;
    while (true) {
      // 두 자식 중 작은값의 자식 인덱스 찾기
      let lChildIndex = index * 2 + 1;
      let rChildIndex = index * 2 + 2;
      let minIndex = index;
      if (
        lChildIndex < this.items.length &&
        this.items[minIndex] > this.items[lChildIndex]
      ) {
        minIndex = lChildIndex;
      }
      if (
        rChildIndex < this.items.length &&
        this.items[minIndex] > this.items[rChildIndex]
      ) {
        minIndex = rChildIndex;
      }
      // 부모 노드 < 자식 노드일 경우, 위치 바꾸기
      if (minIndex !== index) {
        this.swap(index, minIndex);
        index = minIndex;
      } else break;
    }
  }
}

// 함수
function solution(scoville, K) {
  let answer = 0;

  // 힙 생성 후, 오름차순으로 scoville 힙에 저장
  let scovilleHeap = new Heap();
  scoville.forEach((el) => {
    scovilleHeap.insert(el);
  });

  // 스코빌 지수 설정
  while (true) {
    if (scovilleHeap.items[0] >= K) break;
    if (scovilleHeap.items.length <= 1) {
      answer--;
      break;
    }

    const low1 = scovilleHeap.items[0];
    scovilleHeap.removeMin();
    const low2 = scovilleHeap.items[0];
    scovilleHeap.removeMin();
    scovilleHeap.insert(low1 + low2 * 2);

    answer++;
  }
  return scovilleHeap.items[0] < K ? -1 : answer;
}

// console.log(solution([1, 2, 3, 9, 10, 12], 7));
// console.log(solution([1, 2, 3], 100));
