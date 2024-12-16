// 접미사 배열

function solution(my_string) {
  var answer = [];
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer.push(my_string.slice(i, my_string.length));
  }
  return answer.sort();
}

console.log(solution("banana"));
