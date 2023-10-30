// 6603번 | 로또
// 문제 : https://www.acmicpc.net/problem/6603
// 참고 : https://gobae.tistory.com/51

const fs = require("fs");

// 백준
// const readFileSyncAddress ="/dev/stdin";

// VSC
const readFileSyncAddress = __dirname + "/input.txt";

input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const solve = (input) => {
  let idx = 0;
  let answer = "";

  while (input[idx].length !== 1) {
    const [K, ...S] = input[idx++].split(" ").map(Number);

    const dfs = (V, pick) => {
      if (pick.length === 6) {
        answer += `${pick.join(" ")}\n`;
        return;
      }
      for (let i = V; i < K; i++) {
        dfs(i + 1, [...pick, S[i]]);
      }
    };

    dfs(0, []);
    answer += "\n";
  }

  console.log(answer);
};

solve(input);
