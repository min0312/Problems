-- 코드를 입력하세요
SELECT ANIMAL_TYPE, count(*) count
from ANIMAL_INS
Group by ANIMAL_TYPE
having ANIMAL_TYPE = 'cat' or ANIMAL_TYPE = 'dog'
order by ANIMAL_TYPE asc;