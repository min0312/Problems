function solution(s) {
    var answer = '';
    let a = parseInt(s.length/2)
    
    answer = (s.length % 2 == 0) ? s.slice(a-1, a+1) : s.slice(a, a+1)
    
    return answer
}