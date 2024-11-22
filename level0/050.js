// 가까운 수

// function solution(array, n) {
//   let index = 0;
//   let abs = array.sort((a, b) => a - b).map((v) => Math.abs(v - n));
//   index = abs.indexOf(Math.min(...abs));
//   return array[index];
// }

console.log(solution([1, 4, 2, 1], 3));

function solution(array, n) {
  array.sort((a, b) => a - b);
  const abs = array.map((v) => Math.abs(v - n));
  const index = abs.indexOf(Math.min(...abs));
  return array[index];
}
