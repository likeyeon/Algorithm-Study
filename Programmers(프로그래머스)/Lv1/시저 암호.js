function solution(s, n) {
  let answer = '';
  for (let i =0; i<s.length; i++){
    let code = s.charCodeAt(i) + n;
    if (s[i] === ' ')
      answer += ' ';
    else if (s[i].toUpperCase() === s[i])
      answer += code <= 90 ? String.fromCharCode(code) : String.fromCharCode(code - 26);
    else
      answer += code <= 122 ? String.fromCharCode(code) : String.fromCharCode(code - 26);
  }

  return answer;
}

console.log(solution("b B Z", 25));