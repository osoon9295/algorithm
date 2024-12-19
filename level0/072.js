// 배열의 원소 삭제하기

function solution(arr, delete_list) {
  return arr.filter((v) => !delete_list.includes(v));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
