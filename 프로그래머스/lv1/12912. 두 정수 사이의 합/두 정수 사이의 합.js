function solution(a, b) {
    var answer = 0;
    
    if (a == b) {
        answer = a
    } else {
        for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
            answer += i;
        }
    }
    
    return answer;
}