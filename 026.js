function solution(s1, s2) {
  let answer = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(["n", "omg"], ["m", "dot"]));

// 1. s1을 하나하나 돈다
// 2. 첫번째 수를 s2에서 찾아본다
