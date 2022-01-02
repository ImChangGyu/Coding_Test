function solution(n)
{
    let answer = 0;
    let w = n.toString()
    for(let i = 0;i<w.length; i++){
        answer += parseInt(w[i]);
    }

    return answer;
}

//다른사람의 신기한 코드
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}