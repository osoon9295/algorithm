// 숫자 문자열과 영단어

function solution(s) {
  const ENG = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < ENG.length; i++) {
    s = s.replaceAll(ENG[i], i);
  }
  return Number(s);
}

console.log(solution("sixsix6"));
