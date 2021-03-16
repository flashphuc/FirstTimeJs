// Kiểm tra lỗi, kiểm tra giá trị, debug
console.log("Hello World!!!");

//Khai báo biến
// Biến k dc bắt đầu bằng số, kí tự đặc biệt (Trừ dấu gạch dưới "_"), k dc có khoảng cách
//camel
//CHuỗi (String)
var fullName = "Nguyễn Văn A";

//số number
var age = 18;

//Boolean (true/false)
var isLogin = true;


//Mảng(array)
var arrPhone = ["iphone 11","Mi Note 9", "SamSung 20" ];

// object
var pet = {
    name: "bé na",
    age: 1,
    breed: "snake"

}

//Hằng số
// const
// var PI = 3.14;
//gán lại giá trị
// PI = 3.141414;
// console.log(PI);

const PI = 3.14;
// PI = 3.1414;
console.log(PI);


//Câu điều kiện
// Kiểm tra có đủ tuổi
//javaScript cho phép đặt trùng tên biến
var age = 12;


if (age > 21 || age == 21) {
    console.log("version1: đủ tuổi")
} 

if(age > 20){
    console.log("version2: đủ tuổi")
}
if(age >= 21){
    console.log("version3: đủ tuổi")
}
else{
    console.log("mém đủ tuổi");
}

if(age > 21){
    console.log("Lớn hơn 21 tuổi");

}
else if (age == 21){
    console.log("bằng 21 tuổi");

}else{
    console.log("nhỏ hơn 21 tuổi");
}

var loaiXe = "Honda";
switch (loaiXe) {
    case "Honda555":
        console.log("Loại xe là Honda");
        break;
    case "Yamaha":
        console.log("Loại xe là Yamaha");
        break;
    case "Suzuki":
        console.log("Loại xe là Suzuki");
        break;

    default:
        console.log("Loại xe ngoài tầm hiểu biết")
        
}

//Trường hợp toán tử 3 dấu bằng ( ===)
var age = "21";

// ==: chỉ so sánh giá trị mà không so sánh kiểu dữ liệu

// ===: so sánh giá trị và kiểu dữ liệu 
if(age == 21){
    console.log("Bằng 21 tuổi")
}
else{
    console.log("mém đủ tuổi");
}


// Hàm (function)
//2 cách khai báo hàm
//Cách 1: dùng từ khóa function
//Khai báo/ Tạo hàm
function tinh2So() {
    console.log("Tổng 2 số: " +  5 + 2);
}

tinh2So();

//Cách 2: Khai báo 1 biến nhận giá trị là 1 function

var sum1 = function () {
    console.log("Tổng 2 số của hàm sum: " +  (9 + 8));
}

//Gọi hàm
sum1();

//Có giá trị truyền vào
//Có kết quả trả về
function sum2(a,b){
    var tong = a + b;
    return tong;
}

function sum3(){
    var tongMoi = sum2(3,5) + 10;
   console.log("Tổng của sum2 vs sum3: " + tongMoi);
}

sum3();