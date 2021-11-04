function solution(s) {
  //length의 나머지를 구해 그게 1이라면 홀수 이니 그냥 substr()로 홀수의 중간 수 부터 1글자만 반환하고 짝수라면 substr()로 length / 2 - 1에서부터 2글자를 반환한다
  return s.length % 2 === 1
    ? s.substr(s.length / 2, 1)
    : s.substr(s.length / 2 - 1, 2);
}

//다른 사람의 미친 코드
function solution(s) {
  //substring()으로 length / 2를 math.ceil()로 소수를 올림한 수 - 1부터 length / 2를 버림한 수 + 1 까지의 글자를 반환한다.
  //ex) s === 5라면 5 / 2 = 2.5 2.5 올림시 3 - 1 = 2 부터 2.5 버림시 2 + 1 = 3 그러므로 substring(3, 3)은 3번째 글자를 반환한다.
  //ex) s === 6라면 6 / 2 - 1 = 2 부터 6 / 2 + 1 = 4 그러므로 substring(2, 4)은 2번째 부터 4번째 까지의 글자를 반환한다.
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}
