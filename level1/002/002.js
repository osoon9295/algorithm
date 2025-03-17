// 없는 숫자 더하기

function solution(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
