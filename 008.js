// 등차수열의 특정한 항만 더하기

function solution(a, d, included) {
  let answer = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + d * i;
    }
  }
  return answer;
}

console.log(solution(3, 4, [true, false, false, true, true]));
