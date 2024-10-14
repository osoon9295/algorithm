// 배열 두배 만들기

function solution(numbers) {
  const double = numbers.map((num) => {
    return num * 2;
  });
  return double;
}

console.log(solution([1, 2, 3, 4, 5]));
