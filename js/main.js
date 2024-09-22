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
  console.log(hoTen, soKw);
  let tienDien = 0;
  const ketqua = document.getElementById("result2").parentElement;
  if (soKw > 0 && soKw <= 50) {
    let tienDien = soKw * 500;
    ketqua.classList.remove("visually-hidden");
    ketqua.firstElementChild.innerHTML = `Họ tên: ${hoTen} sử dụng ${tienDien} VND tiền điện`;
  } else if (soKw > 50 && soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
    ketqua.classList.remove("visually-hidden");
    ketqua.firstElementChild.innerHTML = `Họ tên: ${hoTen} sử dụng ${tienDien} VND tiền điện`;
  } else if (soKw > 100 && soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    ketqua.classList.remove("visually-hidden");
    ketqua.firstElementChild.innerHTML = `Họ tên: ${hoTen} sử dụng ${tienDien} VND tiền điện`;
  } else if (soKw > 200 && soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    ketqua.classList.remove("visually-hidden");
    ketqua.firstElementChild.innerHTML = `Họ tên: ${hoTen} sử dụng ${tienDien} VND tiền điện`;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    ketqua.classList.remove("visually-hidden");
    ketqua.firstElementChild.innerHTML = `Họ tên: ${hoTen} sử dụng ${tienDien} VND tiền điện`;
  }
}
document.getElementById("btnSubmitBai2").onclick = tinhTienDien;
// Bài 3
