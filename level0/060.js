// 배열 자르기

function solution(numbers, num1, num2) {
  var answer = numbers.slice(num1, num2 + 1);
  return answer;
}

console.log(solution([1, 3, 5], 1, 2));
