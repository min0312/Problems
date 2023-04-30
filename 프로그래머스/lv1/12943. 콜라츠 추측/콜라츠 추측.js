function solution(n) {
    var answer = 0;
    
    while (n > 1) {
        if (answer == 500) {
            answer = -1
            break;
        }
        else {
            if (n%2==0) {
                n /= 2
                answer ++
            }
            else {
                n = n*3+1
                answer ++
            }
        }
    }
    
    return answer;
}