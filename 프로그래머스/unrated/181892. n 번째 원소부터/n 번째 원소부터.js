function solution(num_list, n) {
    var answer = [];
    let m = num_list.length
    
    answer = num_list.splice(n-1,m)
    
    return answer;
}