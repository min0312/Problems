function solution(age) {
    var answer = '';
    let str = String(age).split("")
    
    for (let i = 0; i<str.length; i++) {
        answer += String.fromCharCode(Number(str[i])+97)
    }
    
    return answer;
}