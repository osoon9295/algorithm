// 모음제거

function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  const answer = my_string
    .split("")
    .filter((str) => !vowel.includes(str))
    .join("");
  return answer;
}

console.log(solution("nice to meet you"));
