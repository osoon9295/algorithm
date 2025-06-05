function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    console.log(i);

    if (goal[i] === cards1[0]) {
      cards1.shift();
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
    console.log("cards1", cards1);
    console.log("cards2", cards2);
    console.log("------------");
  }
  return "Yes";
}

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
