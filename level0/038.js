// 배열의 길이에 따라 다른 연산하기

function solution(arr, n) {
  let answer = [];
  if (arr.length % 2 !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    }
  }
  return answer;
}

console.log(solution([444, 555, 666, 777], 100));

// for(let i; i<arr.length;i++){

// }

function solution(arr, n) {
  let answer = [];

  if (arr.length % 2 === 0) {
    answer = arr.map((v, i) => (i % 2 === 1 ? v + n : v));
  } else {
    answer = arr.map((v, i) => (i % 2 === 0 ? v + n : v));
  }

  return answer;
}
