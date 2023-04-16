function solution(my_string) {
    var answer = '';
    const mo = ["a", "e", "i", "o", "u"]
    
    answer = my_string.replace(/[aeiou]/ig, "")
    
    return answer;
}