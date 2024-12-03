// n보다 커질 때까지 더하기

function solution(numbers, n) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer <= n ? (answer += numbers[i]) : answer;
  }

  return answer;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
