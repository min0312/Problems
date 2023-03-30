-- 코드를 입력하세요
SELECT count(DISTINCT name) count
from animal_ins
where name != 'NULL';