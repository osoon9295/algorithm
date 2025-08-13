// 숫자의 표현

function solution(n) {
  let count = 0;
  let start = 1;
  let end = 1;
  let sum = 1;

  while (start <= n) {
    if (sum === n) {
      count++;
      sum -= start;
      start++;
    } else if (sum < n) {
      end++;
      sum += end;
    } else {
      // sum > n
      sum -= start;
      start++;
    }
  }

  return count;
}

console.log(solution(15));
