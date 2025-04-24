// 가장 가까운 같은 글자

function solution(s) {
  const answer = [];
  const object = {};

  for (let i = 0; i < s.length; i++) {
    const str = s[i];

    if (object[str] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - object[str]);
    }

    object[str] = i;
  }

  return answer;
}

console.log(solution("banana"));
