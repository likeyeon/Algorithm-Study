function solution(n) {
  let fib = [0, 1]; // 하위 문제 답을 저장할 메모이제이션 배열

  for (
    let i = 2;
    i <= n;
    i++ // 2부터 시작해서 n까지 반복
  )
    fib.push((fib[i - 1] + fib[i - 2]) % 1234567);

  return fib[n] % 1234567;
}

console.log(solution(4));
