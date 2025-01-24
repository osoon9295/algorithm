// 외계행성의 나이

function solution(age) {
  const answer = String(age).split("");
  const alphabet = "abcdefghij";
  return answer.map((v) => alphabet[v]).join("");
}

console.log(solution(23));
