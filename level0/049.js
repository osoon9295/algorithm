// 7의 개수

// function solution(array) {
//   var answer = 0;
//   var newArray = array
//     .map((v) => v.toString().split(""))
//     .flat(Infinity)
//     .map((v) => {
//       if (v === "7") return answer++;
//     });

//   return answer;
// }

console.log(solution([7, 77, 17]));

function solution(array) {
  var answer = array
    .join("")
    .split("")
    .filter((v) => v === "7").length;

  return answer;
}
