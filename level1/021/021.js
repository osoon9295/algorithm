// [1차] 비밀지도

function solution(n, arr1, arr2) {
  let secretMap = [];

  const plus0 = (n, string) => {
    let str = [];
    for (let i = 0; i < n; i++) {
      if (!string[i]) {
        str.unshift("0");
      } else {
        str.push(string[i]);
      }
    }
    return str;
  };

  const binaryArr1 = arr1.map((element) => plus0(n, element.toString(2)));
  const binaryArr2 = arr2.map((element) => plus0(n, element.toString(2)));

  for (let i = 0; i < n; i++) {
    secretMap[i] = "";
    for (let j = 0; j < n; j++) {
      if (binaryArr1[i][j] === "0" && binaryArr2[i][j] === "0") {
        secretMap[i] += " ";
      } else {
        secretMap[i] += "#";
      }
    }
  }

  return secretMap;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

// [
// [1,2,3,4,5],
// [1,2,3,4,5],
// [1,2,3,4,5],
// [1,2,3,4,5],
// [1,2,3,4,5]
// ]

// 1. arr1 과 arra2을 2진법으로 만든다
// 2. 두개를 하나씩 순서대로 비교해서 둘중 하나라도 "1"이면 "1" 둘다 "0"이면 "0"을 출력해 이차배열 만든다.
// 3. 이차 배열의 안쪽 배열을  1="#"과  0=공백의 형태로 변환하여 푼다.
