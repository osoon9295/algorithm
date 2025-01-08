// 약수 구하기

// for문 이용
function solutionFor(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solutionFor(24));

// do...while문 이용
function solutionDoWhile(n) {
  let answer = [];
  let i = 0;
  do {
    i += 1;
    if (n % i === 0) {
      answer.push(i);
    }
  } while (i <= n);
  return answer;
}

console.log(solutionDoWhile(24));
