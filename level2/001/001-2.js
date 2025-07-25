// 최댓값과 최솟값 다시풀기 (2025.07.25)

function solution(s) {
  let answer = s.split(" ");
  return `${Math.min(...answer)} ${Math.max(...answer)}`;
}

console.log(solution("1 2 4 -4"));
