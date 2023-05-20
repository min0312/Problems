function solution(my_string, alp) {
    var answer = '';
    
    if (my_string.includes(alp)) {
        answer = my_string.replaceAll(alp, alp.toUpperCase())
    } else {
        answer = my_string
    }
    
    return answer;
}