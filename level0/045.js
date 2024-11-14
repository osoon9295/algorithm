// 배열 비교하기
function solution(arr1, arr2) {
  const leng1 = arr1.length;
  const leng2 = arr2.length;
  const sum1 = arr1.reduce((acc, cur) => acc + cur);
  const sum2 = arr2.reduce((acc, cur) => acc + cur);

  if (leng1 < leng2) {
    return -1;
  } else if (leng1 > leng2) {
    return 1;
  } else {
    if (sum1 < sum2) {
      return -1;
    } else if (sum1 > sum2) {
      return 1;
    } else {
      return 0;
    }
  }
}

console.log(solution([49, 13], [70, 11, 2]));
