function solution(absolutes, signs) {
    for(let i = 0;i<absolutes.length;i++){
        signs[i] ? absolutes[i] : absoulutes[i] = -absoulutes[i];
    }
    let answer = absolutes.reduce((a,b) => (a+b));
    return answer;
}

//다른사람의 신기한 풀이
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}