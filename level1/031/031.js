function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        console.log(`i:${nums[i]},j:${nums[j]},k:${nums[k]}`);
        const sum = nums[i] + nums[j] + nums[k];

        const isPrime = (sum) => {
          for (let l = 2; l * l <= sum; l++) {
            if (sum % l === 0) {
              return false;
            }
          }
          return true;
        };

        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 7, 6, 4]));

// 배열에서 서로 다른 3개의 경우의 수를 뽑아낸다.
// 경우의 수들을 소수인지 구별한다.
// 소수라면 +1
