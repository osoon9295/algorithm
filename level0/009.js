// 홀짝에 따라 다른 값 반환하기

function solution(n) {
  let sum = 0;
  const isEven = n % 2 === 0;

  for (let i = 1; i <= n; i++) {
    if (isEven ? i % 2 === 0 : i % 2 !== 0) {
      sum += isEven ? i * i : i;
    }
  }
  return sum;
}

console.log(solution(10));

function solution(n) {
  let sum = 0;
  if (n % 2 === 0) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        sum += i * i;
      }
    }
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  }
  return sum;
}
