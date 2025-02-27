// 진료 순서 정하기

function solution(emergency) {
  const newEmer = [...emergency].sort((a, b) => b - a);
  const answer = emergency.map((num) => newEmer.indexOf(num) + 1);
  return answer;
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
