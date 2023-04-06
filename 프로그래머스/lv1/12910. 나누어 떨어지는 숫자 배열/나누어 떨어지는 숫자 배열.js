function solution(arr, divisor) {
    var answer = [];
    
    for(let i in arr) {
        if (arr[i]%divisor==0) {
            answer.push(arr[i])
        }
    }
    
    if (answer.length != 0) {
        answer.sort(function(comp1, comp2) {
	        return comp1 - comp2
        })
    }
    
    else {
        answer.push(-1)
    }
    
    return answer;
}