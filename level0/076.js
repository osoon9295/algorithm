// 문자열 정렬하기 (1)

function solution(my_string) {
  return my_string
    .split("")
    .map((v) => Number(v))
    .filter((v) => v || v === 0)
    .sort((a, b) => a - b);
}

console.log(solution("abcde0"));
