// 대문자와 소문자

function solution(my_string) {
  return [...my_string]
    .map((str) => {
      return str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
    })
    .join("");
}

console.log(solution("cccCCC"));
