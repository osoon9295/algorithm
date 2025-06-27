// 과일 장수

function solution(k, m, score) {
  let answer = 0;
  let chunkedArr = [];
  let arr = score.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i += m) {
    chunkedArr.push(arr.slice(i, i + m));
  }

  chunkedArr.forEach((v) => {
    if (v.length === m) {
      if (Math.min > k) {
        answer += k * m;
      } else {
        answer += Math.min(...v) * m;
      }
    }
  });

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
