function solution(n) {
    var answer = [];
    
    let str = String(n);
    const mapfn = (arg) => Number(arg);
    
    answer = Array.from(str, mapfn).reverse()
    
    return answer;
}