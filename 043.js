// 팩토리얼

function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i;
    if (answer > n) {
      return i - 1;
    } else if (answer === n) {
      return i;
    }
  }
  return answer;
}

console.log(solution(3628800));
console.log(solution(2));
