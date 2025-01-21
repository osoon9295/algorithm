// 이어 붙인 수

function solution(num_list) {
  let even = "";
  let odd = "";
  num_list.forEach((v) => (v % 2 === 0 ? (even += v) : (odd += v)));
  return Number(odd) + Number(even);
}

console.log(solution([3, 4, 5, 2, 1]));
