// 최댓값 만들기 (2)

function solution(n) {
  n.sort((a, b) => a - b);

  return n[0] * n[1] > n[n.length - 1] * n[n.length - 2]
    ? n[0] * n[1]
    : n[n.length - 1] * n[n.length - 2];
}

console.log(solution([10, 20, 30, 5, 5, 20, 5]));
