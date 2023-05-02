function solution(arr) {
    var answer = [];
    let a = arr[0]
    
    for (let i=0; i<arr.length; i++) {
        if (a > arr[i]) {
            a = arr[i]
        }
    }
    
    answer = arr.filter((element) => element !== a);
    
    if (answer.length == 0) {
        answer.push(-1)
    }
    
    return answer;
}