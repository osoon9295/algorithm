// 캐릭터의 좌표

function solution(keyinput, board) {
  const answer = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left" && answer[0] > -(board[0] - 1) / 2) {
      answer[0]--;
    } else if (keyinput[i] === "right" && answer[0] < (board[0] - 1) / 2) {
      answer[0]++;
    } else if (keyinput[i] === "up" && answer[1] < (board[1] - 1) / 2) {
      answer[1]++;
    } else if (keyinput[i] === "down" && answer[1] > -(board[1] - 1) / 2) {
      answer[1]--;
    }
  }

  return answer;
}

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
