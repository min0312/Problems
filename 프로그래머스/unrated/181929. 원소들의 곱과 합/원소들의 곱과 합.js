function solution(num_list) {
    var answer = 0;
    let n = num_list[0]
    let nm = num_list[0]
    
    for (let i = 1; i<num_list.length; i++) {
        n = n * num_list[i]
        nm = nm + num_list[i]
    }
    
    if (n < nm**2) {
        answer = 1
        }
    
    return answer;
}