function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = 0;
  count += days.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0);
  count += b;
  count += -1 + 5;

  return week[count % 7];
}

console.log(solution(5, 24));
