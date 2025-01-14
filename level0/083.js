// 수 조작하기 2

function solution(numLog) {
  let answer = "";
  for (let i = 0; i < numLog.length; i++) {
    if (i > 0) {
      if (numLog[i] === numLog[i - 1] + 1) {
        answer += "w";
      } else if (numLog[i] === numLog[i - 1] - 1) {
        answer += "s";
      } else if (numLog[i] === numLog[i - 1] + 10) {
        answer += "d";
      } else if (numLog[i] === numLog[i - 1] - 10) {
        answer += "a";
      }
    }
  }

  return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
