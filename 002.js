// 두 수의 연산값 비교하기

// 문제 설명
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

// 제한사항
// 1 ≤ a, b < 10,000

// 입출력 예
// a	b	result
// 2	91	364
// 91	2	912

// 입출력 예 설명

// 입출력 예 #1
// a ⊕ b = 291 이고, 2 * a * b = 364 입니다. 둘 중 더 큰 값은 364 이므로 364를 return 합니다.

// 입출력 예 #2
// a ⊕ b = 912 이고, 2 * a * b = 364 입니다. 둘 중 더 큰 값은 912 이므로 912를 return 합니다.

function solution(a, b) {
  let answerPlus = 0;
  answerPlus = Number(String(a) + String(b));

  let answerMultiple = 2 * a * b;

  if (answerPlus > answerMultiple) {
    return answerPlus;
  } else if (answerPlus < answerMultiple) {
    return answerMultiple;
  } else {
    return answerPlus;
  }
}

console.log(solution(2, 91));

// 의사코드
// 1) a ⊕ b를 구한다
// 1-1) a와 b를 문자열로 바꾼다.
// 1-2) 문자열 a와 b를 더한다
// 1-3) 문자열을 숫자로 바꾼다

// 2) 2 * a * b 를 구한다.

// 3) 1)과 2)를 비교한다. -> if문
// 3-1) 둘 중 하나가 큰경우 큰 값을 return
// 3-2) 두 값이 같으면 1) return
