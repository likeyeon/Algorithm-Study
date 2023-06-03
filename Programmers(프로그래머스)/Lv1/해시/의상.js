function solution(clothes) {
  // Map 객체를 이용하여 각 종류별 옷 개수를 구함
  // key(옷 종류) = value(갯수)
  const map = new Map();
  for (let i = 0; i < clothes.length; i++)
    map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1);

  // 해당 종류의 옷 개수(= 착용하는 경우의 수) + 1(=착용하지 않는 경우의 수) * 옷 종류만큼 누적 계산... - 1(=모두 착용하지 않는 경우)
  let answer = 1;
  map.forEach((val) => (answer *= val + 1));

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
