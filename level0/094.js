function solution(order) {
  let answer = 0;
  const Str = String(order);
  for (let i = 0; i < Str.length; i++) {
    if ((Str[i] === "3") | (Str[i] === "6") | (Str[i] === "9")) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(29423));
