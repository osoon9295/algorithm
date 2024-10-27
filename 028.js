// 개미 군단

function solution(hp) {
  장군개미 = Math.trunc(hp / 5);
  병정개미 = Math.trunc((hp % 5) / 3);
  일개미 = (hp % 5) % 3;
  return 장군개미 + 병정개미 + 일개미;
}

console.log(solution(999));
