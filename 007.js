// 원소들의 곱과 합

function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => acc * cur); // 120
  const add = num_list.reduce((acc, cur) => acc + cur);

  return multiply < add * add ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]));
