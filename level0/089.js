// 피자 나눠 먹기 (2)

// function solution(n) {
//   for (let i = 1; ; i++) {
//     let number = 6 * i;
//     if (number % n === 0) {
//       return i;
//     }
//   }
// }

function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}
console.log(solution(4));
