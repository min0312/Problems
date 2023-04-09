function solution(strlist) {
    var answer = [];
    let str = [];
    
    for (let i=0; i<strlist.length; i++) {
        str = strlist[i].split('')
        answer.push(str.length)
    }
    
    return answer;
}