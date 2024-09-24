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
const TIEN_DIEN = [
  { from: 0, to: 50, gia: 500 },
  { from: 50, to: 100, gia: 650 },
  { from: 100, to: 200, gia: 850 },
  { from: 200, to: 350, gia: 1100 },
  { from: 350, to: Infinity, gia: 1300 },
];

function tinhTienDien() {
  const hoTen = document.getElementById("hotenInput").value;
  const soKw = +document.getElementById("kwInput").value;
  let successKq = document.getElementById("successTienDien").parentElement;
  let dangerKq = document.getElementById("dangerTienDien").parentElement;
  let tienDien = 0;

  if (soKw > 0) {
    let prevTo = 0; // Mốc điện đầu
    for (const { from, to, gia } of TIEN_DIEN) {
      const delta = Math.min(to, soKw) - prevTo;
      tienDien += delta * gia;
      prevTo = to;
      if (soKw <= to) break;
    }
    tienDien = new Intl.NumberFormat("vn-VN").format(tienDien);
    if (dangerKq.classList.contains("visually-hidden")) {
      successKq.classList.remove("visually-hidden");
      successKq.firstElementChild.innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${tienDien} VND`;
    } else {
      dangerKq.classList.add("visually-hidden");
      successKq.classList.remove("visually-hidden");
      successKq.firstElementChild.innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${tienDien} VND`;
    }
  } else {
    if (successKq.classList.contains("visually-hidden")) {
      dangerKq.classList.remove("visually-hidden");
      dangerKq.firstElementChild.innerHTML =
        "Số KW không hợp lệ! Vui lòng nhập lại số KW";
    } else {
      successKq.classList.add("visually-hidden");
      dangerKq.classList.remove("visually-hidden");
      dangerKq.firstElementChild.innerHTML =
        "Số KW không hợp lệ! Vui lòng nhập lại số KW";
    }
  }
}
document.getElementById("btnSubmitBai2").onclick = tinhTienDien;

// Bài 3
//Tính thuế thu nhập cá nhân

function tinhTienThue() {
  const hoTen = document.getElementById("hotenInputbai3").value;
  const tongThuNhap = +document.getElementById("tongThuNhap").value;
  const soNguoiPhuThuoc = +document.getElementById("nguoiphuthuoc").value;
  let successKq = document.getElementById("successTienThue").parentElement;
  let thueThuNhap = 0;
  let chiuthueThuNhap = tongThuNhap - 4e6 - soNguoiPhuThuoc * 1.6e6;
  chiuthueThuNhap > 0 && chiuthueThuNhap <= 6e7
    ? (thueThuNhap = 0.05 * chiuthueThuNhap)
    : chiuthueThuNhap > 6e7 && chiuthueThuNhap <= 12e7
    ? (thueThuNhap = 0.05 * 6e7 + 0.1 * (chiuthueThuNhap - 6e7))
    : chiuthueThuNhap > 12e7 && chiuthueThuNhap <= 21e7
    ? (thueThuNhap = 0.05 * 6e7 + 0.1 * 12e7 + 0.15 * (chiuthueThuNhap - 12e7))
    : chiuthueThuNhap > 21e7 && chiuthueThuNhap <= 384e6
    ? (thueThuNhap =
        0.05 * 6e7 + 0.1 * 12e7 + 0.15 * 21e7 + 0.2 * (chiuthueThuNhap - 21e7))
    : chiuthueThuNhap > 384e6 && chiuthueThuNhap <= 624e6
    ? (thueThuNhap =
        0.05 * 6e7 +
        0.1 * 12e7 +
        0.15 * 21e7 +
        0.2 * 384e6 +
        0.25 * (chiuthueThuNhap - 384e6))
    : chiuthueThuNhap > 624e6 && chiuthueThuNhap <= 96e7
    ? (thueThuNhap =
        0.05 * 6e7 +
        0.1 * 12e7 +
        0.15 * 21e7 +
        0.2 * 384e6 +
        0.25 * 624e6 +
        0.3 * (chiuthueThuNhap - 624e6))
    : chiuthueThuNhap > 96e7
    ? (thueThuNhap =
        0.05 * 6e7 +
        0.1 * 12e7 +
        0.15 * 21e7 +
        0.2 * 384e6 +
        0.25 * 624e6 +
        0.3 * 96e7 +
        0.35 * (chiuthueThuNhap - 96e7))
    : alert("Số tiền thu nhập không hợp lệ"),
    (thueThuNhap = new Intl.NumberFormat("vn-VN").format(thueThuNhap)),
    successKq.classList.remove("visually-hidden"),
    (successKq.firstElementChild.innerHTML = `Họ tên: ${hoTen} | Tiền thuế thu nhập cá nhân: ${thueThuNhap} VND`);
}
document.getElementById("btnSubmitBai3").onclick = tinhTienThue;

//Bài 4
//Tính tiền cáp
function tinhTienCap() {
  let customerInput = document.getElementById("customerInput").value;
  let makhInput = document.getElementById("makhInput").value;
  let soketnoiInput = +document.getElementById("soketnoiInput").value;
  let kenhcaocapInput = +document.getElementById("kenhcaocapInput").value;
  let successKq = document.getElementById("successTienCap").parentElement;
  let tienCap = 0;
  customerInput === "household"
    ? (tienCap = 4.5 + 20.5 + 7.5 * kenhcaocapInput)
    : customerInput === "company"
    ? (tienCap =
        15 +
        50 * kenhcaocapInput +
        75 +
        (soketnoiInput > 10 ? (soketnoiInput - 10) * 5 : 0))
    : alert("Loại khách hàng không hợp lệ"),
    (tienCap = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(tienCap)),
    successKq.classList.remove("visually-hidden"),
    (successKq.firstElementChild.innerHTML = `Mã khách hàng: ${makhInput} | Tiền cáp: ${tienCap}`);
}
document.getElementById("customerInput").onchange = () => {
  document
    .getElementById("soketnoiInput")
    .parentElement.parentElement.classList.toggle(
      "visually-hidden",
      document.getElementById("customerInput").value !== "company"
    );
};
document.getElementById("btnSubmitBai4").onclick = tinhTienCap;
