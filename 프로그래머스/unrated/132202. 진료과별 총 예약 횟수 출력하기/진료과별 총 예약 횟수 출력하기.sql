-- 코드를 입력하세요
SELECT MCDP_CD as "진료과코드", count(PT_NO) as "5월예약건수"
From APPOINTMENT
where EXTRACT(MONTH FROM APNT_YMD) = 5
group by MCDP_CD
order by "5월예약건수" asc, "진료과코드" asc;