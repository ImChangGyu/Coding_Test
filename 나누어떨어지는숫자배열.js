function solution(arr, divisor) {
    let answer = arr.filter((data, ix) => data % divisor === 0);
    answer.sort((a, b) => { //sort는 앞의 숫자만 비교하기에 a와 b를 비교하는 형식으로 해결함
        if (a>b){
            return 1;
        }
        if(a<b){
            return -1;
        }
        return 0;
    })
    if(answer.length === 0){
        answer.push(-1);
    }
    return answer;
}

//다른사람의 신기한 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}