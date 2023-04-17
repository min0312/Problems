function solution(s){
    var answer = true;
    let p = 0
    let y = 0

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    let str = s.toLowerCase().split('')
    for (let i = 0; i<str.length; i++) {
        if (str[i] === "p") {
            p++
        }
        else if (str[i] === "y") {
            y++
        }
    }
    
    if (p === y) {
        return true
    } else {
        return false
    }
}