// 음양 더하기

function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer += -absolutes[i]);
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
