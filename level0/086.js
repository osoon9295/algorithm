// 간단한 식 계산하기

function solution(binomial) {
  let array = binomial.split(" ").map((v) => (isNaN(v) ? v : Number(v)));
  if (array[1] === "+") return array[0] + array[2];
  if (array[1] === "-") return array[0] - array[2];
  if (array[1] === "*") return array[0] * array[2];
}

console.log(solution("40000 * 40000"));

// binomial을 기호를 기준으로 잘라 배열을 만든다.
// 0번 요소와 2번 요소를 1번 요소의 기호에 맞춰 계산한다.
