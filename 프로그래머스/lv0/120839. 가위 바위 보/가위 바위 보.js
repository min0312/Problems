function solution(rsp) {
    var answer = '';
    var str = [];
    
    str = rsp.split("")
    

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "2") { answer += "0" }
        else if (str[i] === "0") { answer += "5" }
        else { answer += "2" }
    }
    
    return answer;
}