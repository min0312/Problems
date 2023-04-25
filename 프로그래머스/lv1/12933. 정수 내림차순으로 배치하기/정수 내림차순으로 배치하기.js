function solution(n) {
    var answer = 0;
    
    let lst = []
    
    lst = String(n).split('')
    lst.sort().reverse()
    
    answer=parseInt(lst.join(''))
    
    return answer;
}