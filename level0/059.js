// 문자 반복 출력하기

function solution(my_string, n) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }

  return answer;
}

console.log(solution("hello", 3));
