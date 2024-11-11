// 중앙값 구하기
function solution(array) {
  const answer = array.sort((a, b) => a - b);
  return answer.at(array.length / 2);
}

console.log(solution([1, 2, 7, 10, 11]));
