function solution(array) {
    var answer = [];
    
    answer[0] = Math.max.apply(null, array)
    for (let i = 0; i<array.length; i++) {
        if (array[i] === answer[0]) {
            answer[1] = i
        }
    }
    
    return answer;
}