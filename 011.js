// 중복된 숫자 개수

function solution(array, n) {
  const num = array.filter((item) => {
    return item === n;
  });
  return num.length;
}

console.log(solution([0, 2, 3, 4], 1));
