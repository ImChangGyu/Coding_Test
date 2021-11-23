function solution(s) {
  //S를 parseint로 변환했을때 숫자로 변환되어 s와 같으면 true 아니면 false를 반환해줌
  const intS = parseInt(s);
  return (s.length === 4 || s.length === 6) && s == intS ? true : false;
}

//다른 사람 코드중 신기해서 가져와봤다.
function solution(s) {
  //사실 나도 처음엔 정규 표현식을 이용해 풀고 싶었으나 정규 표현식을 몰라 이렇게 풀지 못했다.
  //다 풀고 나니 다른 사람 코드에 있었다. 코드가 그냥 반토막이 났다.
  const regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
