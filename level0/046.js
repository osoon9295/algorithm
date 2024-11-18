// 무작위로 K개의 수 뽑기

function solution(arr, k) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === k) return answer;
    if (!answer.includes(arr[i])) answer.push(arr[i]);
  }
  while (answer.length < k) {
    answer.push(-1);
  }
  return answer;
}

console.log(solution([0, 1, 1, 1, 1], 4));
