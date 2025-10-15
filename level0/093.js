function solution(arr, intervals) {
  var answer = [];

  for (let i = 0; i < intervals.length; i++) {
    const numbers = arr.slice(intervals[i][0], intervals[i][1] + 1);
    answer.push(...numbers);
  }
  return answer;
}

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
);
