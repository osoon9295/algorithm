// 마지막 두 원소

function solution(n) {
  let answer = [...n];

  answer.push(
    n[n.length - 1] > n[n.length - 2]
      ? n[n.length - 1] - n[n.length - 2]
      : n[n.length - 1] * 2
  );
  return answer;
}

console.log(solution([2, 1, 6]));
