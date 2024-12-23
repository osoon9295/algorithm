// 0 떼기

function solution(n_str) {
  const noZero = n_str.split("").findIndex((v) => v > 0);
  return n_str.slice(noZero);
}

console.log(solution("0010"));
