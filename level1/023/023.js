// 택배 상자 꺼내기

function solution(n, w, num) {
  let array = [];
  let temp = [];

  for (let i = 1; i <= n; i++) {
    temp.push(i);

    if (temp.length === w) {
      array.push(temp);
      temp = [];
    }
  }

  if (temp.length > 0) {
    while (temp.length < w) {
      temp.push(0);
    }
    array.push(temp);
  }
  const box = array
    .map((arr, idx) => (idx % 2 === 0 ? arr : arr.reverse()))
    .reverse();

  const index = box.find((arr) => arr.includes(num)).indexOf(num);

  console.log("index:", index);

  const answer = box.map((arr) => arr[index]).filter((v) => v);
  return answer.indexOf(num) + 1;
}

console.log(solution(22, 6, 11)); //2

// 1. 택배 상자를 쌓는다.
// 1-1. n번째까지 for문을 돌린다.
// 1-2. w까지 끊어서 배열을 만들어준다.
// 1-3. [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,0,0]]
// 1-4. 짝수인 배열은 뒤집어준다. reverse()쓰면 되지 않을까?
// 1-5. [[1,2,3,4,5,6],[12,11,10,9,8,7],[13,14,15,16,17,18],[0,0,22,21,20,19]]

// 2. 물건을 찾는다.
// 2-1. num이 있는 배열의 순서를 찾는다. 8이라면 index=4
// 2-2. 밖배열을 돌면서
