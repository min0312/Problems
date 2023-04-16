function solution(my_string) {
    var answer = [];
    
    my_string = my_string.split('');
    for (let i=0; i < my_string.length; i++) {
        if(isNaN(my_string[i]) == false){
            answer.push(parseInt(my_string[i]))
        }
    }
    
    answer.sort()
    
    
    return answer;
}