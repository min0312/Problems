def solution(num_list):
    answer = []
    a = 0
    b = 0
    
    for num in num_list :
        if num % 2 == 0 :
            b += 1
        else :
            a += 1
    
    
    return [b, a]