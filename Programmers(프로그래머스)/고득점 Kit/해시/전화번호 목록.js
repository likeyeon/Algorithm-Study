// 프로그래머스 LV2 - 전화번호 목록
// https://school.programmers.co.kr/learn/courses/30/lessons/42577

/* 1차 시도 */
// function solution(phone_book) {
//   const firstStr = phone_book[0];
//   const regax = new RegExp(`^${firstStr}`);
//   for (let i = 1; i < phone_book.length; i++) {
//     phone_book[i] = phone_book[i].replace(/\s/g, "");
//     if (phone_book[i].match(regax)) return false;
//   }
//   return true;
// }

/* 2차 시도 */
function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    const regax = new RegExp(`^${phone_book[i]}`);
    if (regax.test(phone_book[i + 1])) return false;
  }
  return true;
}

// console.log(solution(["119", "97674223", "1195524421"]));
// console.log(solution(["123", "456", "789"]));
// console.log(solution(["12", "1235", "567", "88", "123"]));
// console.log(solution(["010111", "010"]));
