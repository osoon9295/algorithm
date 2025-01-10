// 가까운 1찾기

function solution(arr, idx) {
  const answer = arr.map((v, i) => (i < idx ? 0 : v));
  return answer.indexOf(1);
}

console.log(solution([1, 0, 0, 1, 0, 0], 4));
