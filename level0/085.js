// 특별한 이차원 배열 1

function solution(n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = [];
    for (let j = 0; j < n; j++) {
      answer[i][j] = i === j ? 1 : 0;
    }
  }
  return answer;
}

console.log(solution(6));
