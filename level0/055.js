// function solution(num_list) {
//   return num_list.length > 10
//     ? num_list.reduce((acc, cur) => acc + cur)
//     : num_list.reduce((acc, cur) => acc * cur);
// }

console.log(solution([2, 3, 4, 5]));

function solution(num_list) {
  return num_list.reduce((acc, cur) =>
    num_list.length > 10 ? acc + cur : acc * cur
  );
}
