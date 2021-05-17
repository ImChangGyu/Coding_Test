function solution(s) {
    //p와 y의 갯수를 비교해 같으면 true, 다르면 false
    var answer = true;
    let p = 0;
    let y = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") p++;
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "y" || s[i] === "Y") y++;
    }
    if (p !== y) {
        answer = false;
    } else {
        answer = true;
    }

    return answer;
}
//다른 사람 코드중 신기해서 가져와봤다.
//toUpperCase()를 통해서 대문자로 변환한뒤 P값만 split해서 length가 Y의 length가 동일한지 확인하는 문제.
function numPY(s) {
    return (
        s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
    );
}
