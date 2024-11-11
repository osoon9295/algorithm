// 숨어있는 숫자의 덧셈 (1)

// function solution(my_string) {
//   let answer = 0;

//   const str = my_string.split("");
//   const newStr = str
//     .filter((s) => {
//       return s > 0;
//     })
//     .map((s) => Number(s));
//   answer = newStr.reduce((acc, cur) => {
//     return acc + cur;
//   });

//   return answer;
// }

// function solution(my_string) {
//   let answer = 0;
//   const str = my_string.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] > 0) {
//       answer += Number(str[i]);
//     }
//   }

//   return answer;
// }

console.log(solution("1a2b3c4d123"));
