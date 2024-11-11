// 제곱수 판별하기

function solution(n) {
  let answer = Math.sqrt(n);
  Number.isInteger(answer) ? (answer = 1) : (answer = 2);

  return answer;
}

function solution(n) {
  let answer = Math.sqrt(n);
  answer % 1 === 0 ? (answer = 1) : (answer = 2);

  return answer;
}

console.log(solution(976));
