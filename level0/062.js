// 5명씩

function solution(names) {
  return names.filter((_, i) => (i + 1) % 5 === 1);
}

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);
