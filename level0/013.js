// 머쓱이보다 키 큰 사람
function solution(array, height) {
  const higher = array.filter((h) => {
    return h > height;
  });
  return higher.length;
}

console.log(solution([180, 120, 140], 190));
