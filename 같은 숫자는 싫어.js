function solution(arr) {
    //필터라는 함수를 이용하여 특정조건에 해당하는 배열의 값만 걸러내어 새 배열을 만든다.
    //매개변수로는 함수안에 조건을 적으면 됩니다.
    return arr.filter((value, index) => {
        value != arr[index + 1];
    });
}
//사실 크게 알고리즘에서는 차이가 없지만 변수명을 조금 더 간단하게
//구연하였다.
return arr.filter((v, i) => {
    v != arr[i + 1];
});
