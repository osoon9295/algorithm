// 예산

function solution(d, budget) {
  let count = 0;
  let sum = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (sum + d[i] > budget) break;
    sum += d[i];
    count++;
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
