// Lấy giá trị từ input Username và Password
//Lấy bằng ID
var username = "";
var password = "";

//Trả về kết quả là 1 đối tượng thẻ html
// username = document.getElementById("UserName");
username = document.getElementById("UserName").value;

password = document.getElementById("Password1").value;

console.log(username);
console.log(password);



var text = document.getElementById("txtDemo2");

var click = document.getElementById("btnClick");



console.log(text, click);
// console.log(click);

//onclick
// click.onclick = function(){
//     //Những xử lý khi đã click button
//     text.innerHTML = "Đổi rồi nè!";

// }

//addEventLister
click.addEventListener('click', function(){
    text.innerHTML = "Đổi rồi nè!";
    // text.style.color = "red";
    // text.style.backgroundColor = 'yellow';
    text.classList.add("styleP");
    text.classList.add("styleA");

    
});


//Demo Tắt đèn
var btnBat = document.getElementById('btnBat');
var btnTat = document.getElementById('btnTat');

btnBat.addEventListener('click', function(){
    document.getElementById("imgBongDen").src = "./imgs/pic_bulbon.gif";
})

btnTat.addEventListener('click', function(){
    document.getElementById("imgBongDen").src = "./imgs/pic_bulboff.gif";
})


//Giúp viết gọn cú pháp getElementById
function getEle(id){
    //Trả về đối tượng thẻ được tìm thấy
    return document.getElementById(id);
}

//inpMa

var inpMa = getEle("inpMa");
console.log(inpMa);

var btnDisabled = getEle('btnDisabled');

btnDisabled.addEventListener('click', function () {
    inpMa.disabled = true;
    
})

// xóa thuộc tính
// this.removeAttribute("disabled");


//Tìm đến các thẻ của form
var inpUser = getEle("inpUser");
var inpPass = getEle("inpPass")
var btnLogin = getEle("btnLogin");
var textThongBao = getEle("textThongBao");


//Lấy thông tin khi người dùng click vào button
btnLogin.addEventListener('click', function(event) {
    //Trang web bị load lại khi click button
    //Solution: C1: preventDefault();
    //event là sự kiện mặc định của thẻ do trình duyệt tự thêm hoặc do thư viện thêm
    // event.preventDefault();
    // Lấy giá trị từ input
    var user = inpUser.value;
    var pass = inpPass.value;

    console.log("User:" + user, "Password:" + pass);
    if (user == "CyberSoft" && pass == "CyberSoft") {
        textThongBao.innerHTML = "Đăng nhập thành công"
        textThongBao.style.color = "green";

    }else {
        getEle("textThongBao").innerHTML = "Đăng nhập thất bại"
        // textThongBao.innerHTML = "Đăng nhập thất bại"
        getEle("textThongBao").style.color = "red"
        
    }


})

//Gọi theo tên thẻ (tag name)

//Kết quả là mảng danh sách nhiều thẻ
var arrayHeading2 = document.getElementsByTagName("h2");
console.log(arrayHeading2);

//Lấy cụ thể 1 element trong mảng dựa vào index
console.log(arrayHeading2[0,1]);

//Gọi theo tên thẻ (class name)
//Kết quả là mảng danh sách nhiều thẻ
//form-group

var arrayClassForm = document.getElementsByClassName('form-group');
console.log(arrayClassForm);

//Query Selector
//Luôn lấy được 1 thẻx
var query1 = document.querySelector(".user input");
console.log(query1);

//Query Selector All
//Lấy tất cả các thẻ đáp ứng đúng điều kiện
var query2 = document.querySelectorAll(".form-group input");
console.log(query2);

/**
 * Tổng tiền: Tiền đi + Tiền Tips
 * Tổng tiền: 1000
 * Số người: 2ng
 * Phần trăm: 10%
 * 
 * 
 */

 //Demo tiền Tips
 /**
  * B1: Lấy giá trị từ Form
  */
 getEle("btnTinh").addEventListener('click', function(){
     //B1: Lấy giá trị từ form
     var tongTien = getEle("inpTongTien").value;
     var phanTramTip = getEle("selPhanTram").value;
     var soNguoi = getEle("inpSoNguoi").value;

     console.log(tongTien, phanTramTip, soNguoi)

     //Xây dựng 1 tính năng tính tiền tip

     //Gọi hàm tính tiền tips
     var tipMoiNguoi = tinhTienTip(tongTien,phanTramTip,soNguoi);

     console.log(tipMoiNguoi);
     getEle("txtTienTip").innerHTML = 'Tip Amount <span style="vertical-align:super;">$</span> ' +tipMoiNguoi + "Mỗi người";
    

 })

 //Khai báo hàm
function tinhTienTip(tongTien,phanTramTip,soNguoi){
    var tipMoiNguoi = (tongTien * phanTramTip) /100/ soNguoi;
    return tipMoiNguoi;

}