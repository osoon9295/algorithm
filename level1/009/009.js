// 이상한 문자 만들기

function solution(s) {
  let arrayS = s.split(" ");
  let answer = [];
  for (let i = 0; i < arrayS.length; i++) {
    answer.push("");
    for (let j = 0; j < arrayS[i].length; j++) {
      answer[i] +=
        (j + 1) % 2 !== 0
          ? arrayS[i][j].toUpperCase()
          : arrayS[i][j].toLowerCase();
    }
  }
  return answer.join(" ");
}

console.log(solution("try hello world"));
