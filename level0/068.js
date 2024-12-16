// 접두사인지 확인하기

function solution(my_string, is_prefix) {
  let answer = my_string.indexOf(is_prefix);
  return answer === 0 ? 1 : 0;
}

console.log(solution("banana", "abcd"));
