// 부분 문자열

function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

console.log(solution("tbt", "tbbttb"));
