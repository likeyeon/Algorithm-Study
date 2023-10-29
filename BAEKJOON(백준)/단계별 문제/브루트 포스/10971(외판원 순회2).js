// 10971번 | 외판원 순회2
// 문제 : https://www.acmicpc.net/problem/10971
// 참고 : https://yong-nyong.tistory.com/54

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

[N, ...graph] = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

N = +N;
graph = graph.map((v) => v.split(" ").map(Number));
const visited = Array(N).fill(false);
let min = 1e9;

const dfs = (depth, start, cost) => {
  if (depth === N - 1 && graph[start][0] !== 0) {
    min = Math.min(min, cost + graph[start][0]);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i] && graph[start][i] !== 0) {
      visited[i] = true;
      dfs(depth + 1, i, cost + graph[start][i]);
      visited[i] = false;
    }
  }
};

visited[0] = true;
dfs(0, 0, 0);

console.log(min);
