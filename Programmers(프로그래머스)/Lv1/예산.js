function solution(d, budget) {
  let money = 0;
  let i = 0;
  d.sort((a, b) => a - b);
  for(i = 0; money<=budget; i++)
    money += d[i];
  return --i;
}