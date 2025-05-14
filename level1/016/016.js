// 푸드 파이트 대회

function solution(food) {
  var answer = [];
  for (let i = 0; i < food.length; i++) {
    answer.push(String(i).repeat(food[i] / 2));
  }
  answer.push("0");
  for (let i = food.length - 1; i >= 0; i--) {
    answer.push(String(i).repeat(food[i] / 2));
  }

  return answer.filter((v) => v).join("");
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2]));
