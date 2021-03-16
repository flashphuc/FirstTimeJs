/**
 * 
 * Input(các giá trị cần đem đi tính toán)
 * 
 * Output(Kết quả mong đợi):
 * functions (các chức năng cần xây):
 */


 /**
  * Biến toàn cục có thể dùng ở bất kỳ đâu
  */
 var diemHoa = 6;
 var diemToan = 3;
 var diemLy = 3;
 
 function diemTrungBinh(){
     //Biến cục bộ
     var tongDiemTrungBinh = (diemHoa + diemLy + diemToan) / 3;
     console.log(tongDiemTrungBinh);
     return tongDiemTrungBinh;
 }

//  console.log("Điểm trung bình 3 môn là: " + diemTrungBinh());


//gọi/ dùng hàm
// diemTrungBinh();


//Khai báo hàm
function xepLoai(dtb){
    if (9 < dtb && dtb <= 10) {
        console.log("Xếp loại xuất sắc");
    } else if( 8 < dtb && dtb <= 9) {
        console.log("Xếp loại Giỏi");
    }else if(7 < dtb && dtb <= 8){
        console.log("Xếp loại Khá");
    }else{
        console.log("DTB k hợp lệ");
    }
}

// Gọi hàm
// xepLoai();
// var dtb = diemTrungBinh();
// xepLoai(dtb);

//C2: callback function
//Một hàm nhận tham số truyền vào là một hàm khác
xepLoai(diemTrungBinh());

