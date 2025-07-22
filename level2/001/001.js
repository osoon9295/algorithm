// 최댓값과 최솟값

// function solution(s) {
//   let answer = s.split(" ").map((v) => Number(v));

//   return `${Math.min(...answer)} ${Math.max(...answer)}`;
// }

// console.log(solution("-1 -2 -3 -4"));

const a = ["1", "2"];

console.log("문자열 a", a);
console.log("문자열 a의 최솟값", Math.min(a));
console.log("스프레드 a", ...a);
console.log("스프레드 a의 최솟값", Math.min(...a));
console.log(Math.min("1", "2"));

// `${Math.max(...answer)} ${Math.min(...answer)}`
