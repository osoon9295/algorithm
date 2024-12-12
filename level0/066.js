// 첫 번째로 나오는 음수

function solution(num_list) {
  return num_list.findIndex((v) => v < 0);
}

console.log(solution([13, 22, 53, 24, 15, 6]));
