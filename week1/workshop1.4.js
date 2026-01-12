let username = "admin";
let password = "1234";
let age = "17";

if (username === "admin" && password === "1234" && age >= 18) 
{
    console.log("เข้าสู่ระบบสำเร็จ");
}
else if (username !== "admin" || password !== "1234")
{
    console.log("ชื่อหรือรหัสผ่านไม่ถูกนะจ๊ะ");
}
else if (age < 18)
{
    console.log("อายุน้อยเกินไปจ้า");
}
