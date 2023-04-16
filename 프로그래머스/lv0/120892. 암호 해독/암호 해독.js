function solution(cipher, code) {
    var answer = '';
    
    cipher = cipher.split('')
    
    for (let i=0; i<cipher.length; i++) {
        if ((i+1) % code == 0) {
            answer = answer.concat(cipher[i])
        }
    }
    
    return answer;
}