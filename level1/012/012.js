// 시저 암호

function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (text === " ") {
      answer += " ";
      continue;
    }
    const upperOrLower = upper.includes(text) ? upper : lower;
    let index = upperOrLower.indexOf(text) + n;

    if (upperOrLower.length <= index) {
      index -= upperOrLower.length;
    }

    answer += upperOrLower[index];
  }

  return answer;
}

console.log(solution("a B z", 4));
