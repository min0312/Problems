function solution(array) {
    var answer = 0;
    
    array.sort((a, b) => a - b)
    let n = parseInt(array.length / 2)
    answer = array[n]
    
    return answer;
}