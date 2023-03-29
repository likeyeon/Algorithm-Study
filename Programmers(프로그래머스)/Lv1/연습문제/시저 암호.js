function solution(s, n) {
  let answer = ''; //빈 문자열 변수 생성
  for (let i =0; i<s.length; i++){ //문자열의 길이만큼 반복
    let code = s.charCodeAt(i) + n; //문자열의 인덱스에 대한 아스키코드 + n의 값을 code 변수에 대입
    if (s[i] === ' ') //공백일 경우 : 변수에 공백을 더해줌
      answer += ' ';
    else if (s[i].toUpperCase() === s[i]) //대문자일 경우 : 삼항연산자를 이용해 code 값이 90이하가 아닌 경우(=대문자의 범위를 벗어난 경우) 26을 뺀 값을 문자로 변환하여 변수에 더해주고, 90이하이면 값을 문자로 바로 변환하여 변수에 더함
      answer += code <= 90 ? String.fromCharCode(code) : String.fromCharCode(code - 26);
    else //소문자일 경우 : 삼항연산자를 이용해 code 값이 122이하가 아닌 경우(=소문자의 범위를 벗어난 경우) 26을 뺀 값을 문자로 변환하여 변수에 더해주고, 122이하이면 값을 문자로 바로 변환하여 변수에 더함
      answer += code <= 122 ? String.fromCharCode(code) : String.fromCharCode(code - 26);
  }

  return answer;
}