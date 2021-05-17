process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const a = data.split(" ");
    const n = Number(a[0]),
        m = Number(a[1]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            //보통 여기에 console.log를 많이 쓰지만 console.log()는 줄바꿈을 하기에
            //process.stdout.write("*")를 이용하여 줄바꿈없이 콘솔에 출력한다.
            process.stdout.write("*");
        }
        console.log();
    }
});
//보고 감탄한 코드
/* 
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});
*/
//위의 코드는 다른 사람의 풀이에서 확인한 코드인데
//매우 간결해 놀랐다.
//repeat이라는 메서드를 이용해 가로의 길이 만큼
//*를 작성하게 만들었다.
