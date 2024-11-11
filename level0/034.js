// n의 배수 고르기

function solution(n, numlist) {
  const answer = numlist.filter((num) => {
    return num % n === 0;
  });
  return answer;
}

console.log(solution(5, [1, 9, 3, 10, 13, 5]));
