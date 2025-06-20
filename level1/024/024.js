function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        if (j * j === i) count++;
        else count += 2;
      }
    }
    answer += count > limit ? power : count;
  }
  return answer;
}

console.log(solution(10, 3, 2));

// 1. 1부터 number까지의 수를 돌아서 각각 약수의 개수를 구한다.
// 1-1. 1부터 number까지 for문을 돈다.

// 2. limit가 넘는 경우 power로 대체한다.
// 3. 모든 수를 더한다.

// function solution(number, limit, power) {
//   let total = 0;

//   for (let i = 1; i <= number; i++) {
//     let count = 0;

//     // 약수 찾기 (i의 제곱근까지만 탐색)
//     for (let j = 1; j * j <= i; j++) {
//       if (i % j === 0) {
//         if (j * j === i) count += 1; // 제곱수이면 1만 추가
//         else count += 2; // 아니면 짝이니까 2개 추가
//       }
//     }
//     console.log(count);
//     // limit 초과하면 power로 대체
//     total += count > limit ? power : count;
//   }

//   return total;
// }

// console.log(solution(10, 3, 2));
