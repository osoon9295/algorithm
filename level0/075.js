function solution(myString, pat) {
  let changeAandB = myString
    .split("")
    .map((v) => {
      if (v === "A") return "B";
      if (v === "B") return "A";
    })
    .join("");
  return +changeAandB.includes(pat);
}

console.log(solution("ABAB", "ABAB"));
