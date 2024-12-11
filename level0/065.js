// 순서 바꾸기
function solution(num_list, n) {
  let answer = num_list.filter((num, i) => i >= n);
  for (let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}

console.log(solution([5, 2, 1, 7, 5], 3));
