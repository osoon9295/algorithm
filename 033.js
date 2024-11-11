// 최댓값 만들기 (1)

function solution(numbers) {
  const answer = numbers.sort((a, b) => b - a);
  return answer[0] * answer[1];
}

console.log(solution([1, 2, 3, 4, 5]));
