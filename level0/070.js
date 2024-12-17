// 수 조작하기 1
function solution(n, control) {
  var answer = n;
  for (let i = 0; i < control.length; i++) {
    if (control[i] === "w") {
      answer += 1;
    } else if (control[i] === "s") {
      answer -= 1;
    } else if (control[i] === "d") {
      answer += 10;
    } else {
      answer -= 10;
    }
  }
  return answer;
}

console.log(solution(0, "wsdawsdassw"));
