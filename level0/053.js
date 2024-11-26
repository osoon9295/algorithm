// 특정한 문자를 대문자로 바꾸기

// function solution(my_string, alp) {
//   if (!my_string.includes(alp)) return my_string;
//   let answer = my_string
//     .split("")
//     .map((str) => (str === alp.toLowerCase() ? str.toUpperCase() : str))
//     .join("");
//   return answer;
// }

console.log(solution("programmers", "p"));

function solution(my_string, alp) {
  return my_string.replace(alp, alp.toUpperCase());
}
