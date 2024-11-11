// 짝수는 싫어요

function solution(n) {
  let answer = [];
  for (i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(10));
