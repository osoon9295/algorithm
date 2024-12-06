// n개 간격의 원소들

// function solution(num_list, n) {
//   let answer = [];
//   for (let i = 0; i < num_list.length; i += n) {
//     answer.push(num_list[i]);
//   }
//   return answer;
// }

console.log(solution([4, 2, 6, 1, 7, 6], 4));

function solution(num_list, n) {
  return num_list.filter((_, i) => i % n === 0);
}
