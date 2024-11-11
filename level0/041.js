// 외계어 사전

function solution(spell, dic) {
  spell = spell.sort().join("");
  const answer = dic
    .map((v) => {
      return v.split("").sort().join("");
    })
    .find((v) => v === spell);
  return answer ? 1 : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
