function solution(nums) {
  const max = nums.length / 2;
  const count = [...new Set(nums)].length;

  return count > max ? max : count;
}

console.log(solution([3, 3, 3, 2, 2, 4]));
