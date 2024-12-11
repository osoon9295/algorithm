// 자릿수 더하기
function solution(n) {
  var answer = n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  return answer;
}

console.log(solution(1234));
