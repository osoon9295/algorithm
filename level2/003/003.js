// 최솟값 만들기

function solution(A, B) {
  let answer = 0;
  let sortedA = A.sort((a, b) => a - b);
  let sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += sortedA[i] * sortedB[i];
  }

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
