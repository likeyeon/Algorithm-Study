function solution(num){
  var cnt = 0;
  while(num!==1){
    num % 2 === 0 ? num /= 2 : num = num*3+1;
    cnt++;
    if (cnt === 500){
      cnt = -1;
      break;
    }
  }
  return cnt;
}