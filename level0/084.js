// 암호 해독
function solution(cipher, code) {
  let answer = "";
  for (let i = 1; i <= cipher.length; i++) {
    if (i % code === 0) {
      answer += cipher[i - 1];
    }
  }
  return answer;
}

console.log(solution("pfqallllabwaoclk", 2));
