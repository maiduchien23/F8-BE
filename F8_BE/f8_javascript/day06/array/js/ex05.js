// console.log(Array.prototype);

// var number = [1, 3, 5, 7, 9];

// //tÌm phần tử có giá trị bằng 3

// var result = number.find(function (number) {
//   return number > 3;
// });

// console.log(result);

var content =
  "Trao đổi với phóng viên ANTĐ, Đại tá Nguyễn Thế Hùng, Trưởng Phòng Cảnh sát hình sự CATP Hà Nội cho biết, đơn vị đang phối hợp với Công an các quận, huyện, thị xã trên địa bàn thành phố thực hiện nghiêm túc, có hiệu quả kế hoạch tập trung đấu tranh phòng, chống tội phạm và tệ nạn xã hội tại các địa bàn công cộng, nơi vui chơi giải trí, nhà ga, bến tàu, bến xe, sân bay; chủ động phối hợp với các bệnh viện triển khai nhiều biện pháp nắm tình hình địa bàn, tăng cường lực lượng tuần tra, kiểm soát đảm bảo ANTT, phòng ngừa, ngăn chặn, kịp thời phát hiện và xử lý nghiêm, không để tình trạng đối tượng “cò” dẫn người bệnh đi khám hoạt động gây mất trật tự công cộng; Lập hồ sơ đưa các đối tượng đã xử lý vào diện quản lý (theo Nghị định 120/CP), phục vụ công tác lập hồ sơ đưa người đi cơ sở giáo dục bắt buộc, trường giáo dưỡng.";

console.log(content);

var length = 20;

var result = "..." + content.split(" ").slice(-length).join(" ");

console.log(result);
