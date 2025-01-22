// 특별한 이차원 배열 2

function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === arr[j][i]) {
        answer += 0;
      } else {
        answer += 1;
      }
    }
    return answer > 0 ? 0 : 1;
  }
  return answer;
}

console.log(
  solution([
    [19, 498, 258, 587],
    [63, 93, 7, 754],
    [258, 7, 1000, 723],
    [587, 754, 723, 81],
  ])
);
