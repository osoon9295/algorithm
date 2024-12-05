// 삼각형의 완성조건 (1)

function solution(sides) {
  const sort = sides.sort((a, b) => a - b);
  return sort[0] + sort[1] > sort[2] ? 1 : 2;
}

console.log(solution([199, 72, 222]));
