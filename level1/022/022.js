// 추억 점수

function solution(name, yearning, photo) {
  let table = {};
  for (let i = 0; i < name.length; i++) {
    table[name[i]] = yearning[i];
  }

  const answer = photo.map((p) => {
    return p
      .map((n) => (table[n] ? table[n] : 0))
      .reduce((acc, cur) => acc + cur);
  });

  return answer;
}

console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
);

// 1. name과 yearning을 이용해 객체를 만든다
// 2. photo 배열에 접근해 각각 사람을 점수로 만든다.
// 3. 점수를 더한다.
