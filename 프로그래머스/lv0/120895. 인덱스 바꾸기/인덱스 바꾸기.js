function solution(my_string, num1, num2) {
    var answer = '';    
    
    answer = my_string.substr(0,num1)
    answer += my_string[num2]
    answer += my_string.substring(num1+1, num2)
    answer += my_string[num1]
    answer += my_string.substr(num2+1)
    
    return answer;
}