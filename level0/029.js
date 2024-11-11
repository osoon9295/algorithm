// 가위 바위 보

function solution(rsp) {
  const answer = rsp.split("").map((str) => {
    if (str === "2") {
      return "0";
    } else if (str === "0") {
      return "5";
    } else {
      return "2";
    }
  });
  return answer.join("");
}

console.log(solution("205"));
