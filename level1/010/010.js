// 최소직사각형

function solution(sizes) {
  let maxW = 0;
  let maxH = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      if (maxW < sizes[i][1]) {
        maxW = sizes[i][1];
      }
      if (maxH < sizes[i][0]) {
        maxH = sizes[i][0];
      }
    } else {
      if (maxW < sizes[i][0]) {
        maxW = sizes[i][0];
      }
      if (maxH < sizes[i][1]) {
        maxH = sizes[i][1];
      }
    }
  }
  return maxH * maxW;
}

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
