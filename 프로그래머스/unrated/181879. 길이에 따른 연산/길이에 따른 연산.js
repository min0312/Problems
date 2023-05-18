function solution(num_list) {
    var answer = num_list[0];
    let n = num_list.length
    
    if (n >= 11) {
        for (let i = 1; i<n; i++) {
            answer = answer + num_list[i]
        }
    } else {
        for (let i = 1; i<n; i++) {
            answer = answer*num_list[i]
        }
    }
    
    return answer;
}