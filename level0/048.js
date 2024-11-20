// l로 만들기
function solution(myString) {
  var answer = [...myString].map((v) => (v <= "l" ? "l" : v)).join("");
  return answer;
}

console.log(solution("abcdevwxyz"));
