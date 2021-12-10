function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  } else {
    return arr.filter((element) => element !== Math.min(...arr));
  }
  //이걸 진짜 잘 풀었다고 생각했는데 정확성 테스트 1번에서 시간이 4000ms가 걸렸다.
  //그래서 다른 사람의 코드를 돌려보니까 다 0.4ms 밑으로 나온다.... 말도 안된다.
}

//다른 사람의 코드
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
