// 아이스 아메리카노
function solution(money) {
  let answer = [];
  answer.push(Math.trunc(money / 5500));
  answer.push(money % 5500);
  return answer;
}

console.log(solution(15000));
