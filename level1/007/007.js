// 크기가 작은 부분문자열

function solution(t, p) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (
      t.slice(i, i + p.length) <= p &&
      t.slice(i, i + p.length).length == p.length
    ) {
      count++;
    }
  }

  return count;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
