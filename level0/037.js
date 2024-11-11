// 뒤에서 5등 위로

function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(5);
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));

// 1) 오름차순으로 정렬한다
// 2) 앞에서 6번째부터를 반환한다.
