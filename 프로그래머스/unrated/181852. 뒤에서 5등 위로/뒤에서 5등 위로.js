function solution(num_list) {
    var answer = [];
    let lst = [];
    
    function compare(a, b) {
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
    }
    
    lst = num_list.sort(function compare(a, b) {
      return a - b;
    });
    
    for (let i=5; i<lst.length; i++) {
        answer.push(lst[i])
    }
    
    return answer;
}