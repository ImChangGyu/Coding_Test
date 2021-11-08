function solution(s) {
  //이번코드는 가장 짧은 풀이와도 동일하다.
  //구글이 짱이다.(물론 함수만 검색함)
  //split()을 이용해 각 문자를 전부 배열로 만들어주고 sort()를 이용해 오름차순 정렬 이후 reverse()로 이를 뒤집으면 내림차순 정렬이 된다. join을 이용해 배열을 문자열로 만들어주면 완성
  return s.split("").sort().reverse().join("");
}
