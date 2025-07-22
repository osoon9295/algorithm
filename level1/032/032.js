// 옹알이 (2)

function solution(babbling) {
  const nephew = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];
    let previousWord = "";
    let index = 0;
    let isValid = true;

    while (index < word.length) {
      let matched = false;

      for (let j = 0; j < nephew.length; j++) {
        let sound = nephew[j];

        if (word.startsWith(sound, index)) {
          if (sound === previousWord) {
            isValid = false;
            break;
          }
          previousWord = sound;
          index += sound.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        isValid = false;
        break;
      }
      if (!isValid) break;
    }

    if (isValid && index === word.length) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(["ayaye", "yemaye"]));
