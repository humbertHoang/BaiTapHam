"use strict";
// Bài 1
// Quản lý tuyển sinh
const kiemtraDiem = (diem) => diem > 0;
function quanliTuyensinh() {
  const ketqua = document.getElementById("result").parentElement;
  const diemchuan = +document.getElementById("diemchuanInput").value;
  const khuvuc = +document.getElementById("khuvucInput").value;
  const doituong = +document.getElementById("doituongInput").value;
  const [diemmon1, diemmon2, diemmon3] = [
    "diemmon1Input",
    "diemmon2Input",
    "diemmon3Input",
  ].map((id) => +document.getElementById(id).value);

  if ([diemmon1, diemmon2, diemmon3].every(kiemtraDiem)) {
    const tongdiem = diemmon1 + diemmon2 + diemmon3 + khuvuc + doituong;
    ketqua.classList.remove("visually-hidden", tongdiem >= diemchuan);
    ketqua.firstElementChild.innerHTML = `Bạn đã ${
      tongdiem >= diemchuan ? "đậu" : "rớt"
    } | Điểm thi: ${tongdiem}`;
  } else {
    ketqua.classList.remove("visually-hidden");
    ketqua.firstElementChild.innerHTML = "Bạn đã rớt vì có điểm liệt 0";
  }
}
document.getElementById("btnSubmit").onclick = quanliTuyensinh;

// Bài 2
// Tính tiền điện
function tinhTienDien() {
  let hoTen = document.getElementById("hotenInput").value;
  let soKw = +document.getElementById("kwInput").value;
}
// Bài 3
