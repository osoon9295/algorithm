// 문자열 다루기 기본

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    var answer = s.split("").map((v) => {
      return !isNaN(Number(v));
    });
    return answer.includes(false) ? false : true;
  } else {
    return false;
  }
}

console.log(solution("a234"));
console.log(solution("1234"));

// function solution(s) {
//   if (s.length === 4 || s.length === 6) {
//     return !isNaN(s);
//   } else {
//     return false;
//   }
// }

// function solution(s) {
//   if (s.length === 4 || s.length === 6) {
//     return !isNaN(s);
//   } else {
//     return false;
//   }
// }
