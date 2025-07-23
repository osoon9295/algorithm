// 올바른 괄호

function solution(s) {
  let answer = s;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "(") {
      answer = s.replace("(", "").replace(")", "");
    } else {
      return false;
    }
    console.log(answer);
  }

  return answer;
}

console.log(solution("(())))(())"));

// 규칙
//  1. 열리고 시작하지 않으면 false
// 2. 닫히고 종료되지 않으면 false
// 3. 짝수가 안맞으면 false
// 4.
