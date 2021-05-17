function solution(n) {
    //맨처음 number를 string으로 변환시켜 split으로 나눠서 배열로 만든후 reverse로
    //배열을 뒤집은 후에 map을 통해 배열을 안에 값을 number로 바꿔준다.
    return String(n)
        .split("")
        .reverse()
        .map((v) => {
            Number(v);
        });
}
