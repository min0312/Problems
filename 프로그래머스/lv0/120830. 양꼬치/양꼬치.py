def solution(n, k):
    answer = 0
    
    k -= int(n/10)
    
    answer = 12000*n + 2000*k
    
    return answer