// 문자열 정수의 합

function solution(num_str) {
  return [...num_str].reduce((acc, cur) => acc + +cur, 0);
}

console.log(solution("1000000"));
