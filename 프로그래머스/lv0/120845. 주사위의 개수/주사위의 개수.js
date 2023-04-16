function solution(box, n) {
    var answer = 0;
    
    function re(t, n) {
        return parseInt(t/n)
    }
    
    answer = re(box[0], n) * re(box[1], n) * re(box[2], n)
    
    
    return answer;
}