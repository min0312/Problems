function solution(n) {
    var answer = 0;
    
    for (let i=6*n; i>0; i--) {
        if (i%6==0 && i%n==0) {
            answer=i/6
        }
    }
    
    
    return answer;
}