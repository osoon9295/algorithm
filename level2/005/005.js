// 이진 변환 반복하기

function solution(s) {
  let answer = [0, 0];

  do {
    s = s.split("").filter((v) => {
      if (v === "0") ++answer[1];
      return v === "1";
    });
    s = s.length.toString(2);
    ++answer[0];
  } while (s.length !== 1);

  return answer;
}

console.log(solution("110010101001"));
