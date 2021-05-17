function solution(s) {
    //Number()라는 함수를 이용하여 string을 int로 변환해준다.
    var answer = 0;
    answer = Number(s);
    return answer;
}
//보고 감탄한 코드
function stringToInt(s) {
    return +s;
}
//Javascript에서 문자열과 숫자열의 사칙연산은 숫자로 파싱되어서 나온다.
//(근데 사실 이게 왜 파싱되어서 나오는걸까?)
