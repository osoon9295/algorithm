// 콜라 문제

function solution(a, b, n) {
  let answer = 0;
  let qt = n;

  while (qt >= a) {
    answer += Math.floor(qt / a) * b;
    qt = Math.floor(qt / a) * b + (qt % a);
  }

  return answer;
}

console.log(solution(5, 3, 21)); // 결과는 27이어야 맞습니다.
