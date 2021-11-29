function solution(numbers) {
  // 이번건 진짜 맘에 드는게 잘푸신분이랑 똑같다. 그냥 너무 잘푼거 같다.
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  const set = [...new Set(answer)];
  return set.sort((a, b) => {
    return a - b;
  });
}
//다른 사람 풀이
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
