// JadenCase 문자열 만들기

function solution(s) {
  let answer = [];
  let word = "";
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        word += arr[i][j].toUpperCase();
      } else {
        word += arr[i][j].toLowerCase();
      }
    }
    answer.push(word);
    word = "";
  }
  return answer.join(" ");
}

console.log(solution("3people unFollowed me"));
