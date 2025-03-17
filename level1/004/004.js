// 최대공약수와 최소공배수

function solution(n, m) {
  let answer = [];
  for (let i = 1; i <= Math.max(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      answer[0] = i;
    }
    answer[1] = (n * m) / answer[0];
  }
  return answer;
}

console.log(solution(3, 12));
console.log(solution(2, 5));
