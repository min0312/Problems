-- 코드를 입력하세요
SELECT I.NAME, I.DATETIME
FROM ANIMAL_INS I
left join animal_outs o
on i.animal_id = o.animal_id
where o.animal_id is null
ORDER BY I.DATETIME ASC
LIMIT 3;