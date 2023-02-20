function solution(s){
  let numY = 0;
  let numP = 0;
  s = s.toLowerCase()

  for (let i=0; i<s.length; i++){
    if (s[i] === 'y') numY += 1;
    else if (s[i] === 'p') numP += 1;
  }
  return numY === numP ? 'true' : 'false'
}
