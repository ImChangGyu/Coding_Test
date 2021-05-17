process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const a = data.split(" ");
    const n = Number(a[0]);
    const m = Number(a[1]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            //보통 여기에 console.log를 많이 쓰지만 console.log()는 줄바꿈을 하기에
            //process.stdout.write("*")를 이용하여 줄바꿈없이 콘솔에 출력한다.
            process.stdout.write("*");
        }
        console.log();
    }
});
