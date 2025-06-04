// 명예의 전당 (1)

function solution(k, score) {
  let theHallOfFame = [];
  let worst = [];

  if (k < score.length) {
    for (let i = 0; i < k; i++) {
      theHallOfFame.push(score[i]);
      worst.push(Math.min(...theHallOfFame));
      console.log(i);
      console.log("명예의 전당", theHallOfFame);
      console.log("최하위 배열", worst);
      console.log("---------------------");
    }

    for (let i = k; i < score.length; i++) {
      theHallOfFame.push(score[i]);
      theHallOfFame.sort((a, b) => a - b).shift();
      worst.push(Math.min(...theHallOfFame));
      console.log(i);
      console.log("명예의 전당", theHallOfFame);
      console.log("최하위 배열", worst);
      console.log("---------------------");
    }
  } else {
    for (let i = 0; i < score.length; i++) {
      theHallOfFame.push(score[i]);
      worst.push(Math.min(...theHallOfFame));
    }
  }

  return worst;
}

console.log(solution(3, [0, 2]));
