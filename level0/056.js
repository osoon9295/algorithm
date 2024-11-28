// 할 일 목록

// function solution(todo_list, finished) {
//   var answer = [];

//   for (let i = 0; i < todo_list.length; i++) {
//     if (!finished[i]) {
//       answer.push(todo_list[i]);
//     }
//   }
//   return answer;
// }

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
);

function solution(todo_list, finished) {
  return todo_list.filter((todo, i) => !finished[i]);
}
