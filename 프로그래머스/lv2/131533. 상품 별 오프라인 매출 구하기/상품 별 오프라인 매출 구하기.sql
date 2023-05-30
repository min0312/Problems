-- 코드를 입력하세요
SELECT P.PRODUCT_CODE, SUM(S.SALES_AMOUNT) * P.PRICE AS SALES
FROM PRODUCT P inner JOIN OFFLINE_SALE S
ON P.PRODUCT_ID = S.PRODUCT_ID
GROUP BY P.PRODUCT_ID
ORDER BY SALES DESC, P.PRODUCT_CODE
;