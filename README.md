# currencies-platform

## ขั้นตอนการใช้งาน Project

1. ติดตั้ง PostgreSQL สร้าง User และ Password ให้เรียบร้อย
2. ทำการ clone project ลงที่เครื่อง
3. นำ User กับ Password ไป set ลงไฟล์ .env
4. ทำการ download library ที่จำเป็นด้วยคำสั่ง npm i
5. ใช้คำสั่ง npm run build เพื่อเตรียมไว้สำหรับ deploy
6. ใช้คำสั่ง npm run serve เพื่อเปิด project จากไฟล์ที่ build แล้ว

หมายเหตุ ไม่ได้ ignore .env file ไว้เนื่องจากต้องใช้สำหรับเป็น config สำหรับ project

## Route สำหรับใช้ในการทดสอบ

- localhost:3001/api/v1/user
- localhost:3001/api/v1/wallet
- localhost:3001/api/v1/currency

## ความหมายของแต่ละ Table

- USER: บัญชีผู้ใช้งาน
- CURRENCY: สกุลเงินดิจิทัลหรือเงิน Fiat ที่รองรับ
- WALLET: กระเป๋าเงินของผู้ใช้แต่ละคน แยกตามสกุลเงิน
- ORDER: คำสั่งซื้อ-ขายคริปโต
- TRADE: บันทึกการจับคู่ซื้อ-ขายจริงเมื่อคำสั่งตรงกัน
- TRANSACTION: บันทึกการโอนเงิน/เหรียญภายในและภายนอกระบบ
