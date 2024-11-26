// 짝수 홀수 개수

function solution(num_list) {
  let answer = [0, 0];
  num_list.forEach((num) => (num % 2 === 0 ? ++answer[0] : ++answer[1]));
  return answer;
}

console.log(solution([1, 3, 5, 7]));
