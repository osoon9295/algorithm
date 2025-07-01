function solution(n, m, section) {
  let answer = 0;
  let end = 0;

  for (let i = 0; i < section.length; i++) {
    console.log("-----------------");
    console.log("시작 answer:", answer);
    console.log("i:", i);
    if (section[i] > end) {
      answer++;
      end = section[i] + m - 1;
      console.log(`end:${end}`);
    }
  }

  return answer;
}

console.log(solution(6, 2, [1, 2, 4, 5]));

// 1. section 0번에 접근하여 수가 있으면 answer +1 이후 [0]에 m을 더해준다
// 2. section 0번 + m 수가 있으면 answer +1 없으면 +1 또없으면 +1
//6, 2, [1, 2, 4, 5]
