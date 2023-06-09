// 프로그래머스 LV3 - 베스트앨범
// https://school.programmers.co.kr/learn/courses/30/lessons/42579

// 정확성: 100.0
// 효율성 테스트는 없었음
// 총점 100.0

function solution(genres, plays) {
  let answer = [];

  // 1. 장르별로 총 재생횟수의 합을 저장해놓은 후, 재생 횟수별로 내림차순 정렬
  let genreObject = {};
  for (let i = 0; i < genres.length; i++) {
    genreObject[genres[i]] = genreObject[genres[i]]
      ? genreObject[genres[i]] + plays[i]
      : plays[i];
  }
  let playCntGenre = Object.entries(genreObject);
  playCntGenre.sort((a, b) => b[1] - a[1]);

  // 2. 장르, 고유번호, 재생횟수로 이루어진 객체 생성
  let allObject = [];
  for (let i = 0; i < genres.length; i++) {
    allObject.push({ genre: genres[i], index: i, playCnt: plays[i] });
  }

  // 3. 장르 별 상위 2개 노래의 고유 번호를 배열에 넣고 최종 반환
  playCntGenre.forEach((e) => {
    let temp = [];
    for (let j = 0; j < allObject.length; j++) {
      if (allObject[j].genre === e[0]) temp.push(allObject[j]);
    }
    temp.sort((a, b) => b.playCnt - a.playCnt);
    temp.forEach((v, i) => {
      if (i < 2) answer.push(v.index);
    });
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 500, 500, 2500]
  )
);
