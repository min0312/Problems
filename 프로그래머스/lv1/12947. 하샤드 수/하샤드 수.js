function solution(x) {
    var answer = true;
    let n = 0
    let m = x
    
    while (m > 0) {
        n = n + m%10
        m = parseInt(m/10)
    }
    
    if (x%n != 0) {
        answer = false
    }
    
    return answer;
}