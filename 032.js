// 가장 큰 수 찾기

function solution(array) {
  let answer = [];
  const max = Math.max(...array);
  answer.push(max);
  answer.push(array.indexOf(max));
  return answer;
}

console.log(solution([9, 10, 11, 8]));
