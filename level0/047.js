// 배열 회전시키기

// function solution(numbers, direction) {
//   var answer = [];
//   if (direction === "right") {
//     answer = numbers.slice(-1);
//     for (let i = 0; i < numbers.length - 1; i++) {
//       answer.push(numbers[i]);
//     }
//   }
//   if (direction === "left") {
//     for (let i = 0; i < numbers.length - 1; i++) {
//       answer.push(numbers[i + 1]);
//     }
//     answer.push(numbers[0]);
//   }
//   return answer;
// }

function solution(numbers, direction) {
  if (direction === "left") {
    numbers.push(numbers[0]);
    numbers.shift();
  } else {
    numbers.unshift(numbers[numbers.length - 1]);
    numbers.pop();
  }
  return numbers;
}
// function solution(numbers, direction) {
//   var answer = [];

//   for (let i = 0; i < numbers.length - 1; i++) {
//     if (direction === "right") {
//       answer.push(numbers[i]);
//     } else {
//       answer.push(numbers[i + 1]);
//     }
//   }

//   direction === "richt"
//     ? answer.unshift(numbers.slice(-1).split(""))
//     : answer.push(numbers[0]);

//   return answer;
// }

console.log(solution([1, 2, 3], "right"));
