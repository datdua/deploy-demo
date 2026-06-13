// data/headerFilterData.js
// Dữ liệu giả lập cho 2 panel trên thanh công cụ: "Hành chính" và "Công ty/HTX"

// ===== Panel "Hành chính" =====
export const provinces = [
  { value: "tat-ca", label: "Tất cả" },
  { value: "ca-mau", label: "Cà Mau" },
  { value: "bac-lieu", label: "Bạc Liêu" },
  { value: "soc-trang", label: "Sóc Trăng" },
  { value: "can-tho", label: "Cần Thơ" },
//   { value: "hau-giang", label: "Hậu Giang" },
//   { value: "vinh-long", label: "Vĩnh Long" },
//   { value: "kien-giang", label: "Kiên Giang" },
];

export const wardsByProvince = {
  "tat-ca": [{ value: "tat-ca", label: "Tất cả" }],
  "ca-mau": [
    { value: "tat-ca", label: "Tất cả" },
    { value: "phuong-5", label: "Phường 5" },
    { value: "xa-ly-van-lam", label: "Xã Lý Văn Lâm" },
    { value: "xa-an-xuyen", label: "Xã An Xuyên" },
  ],
  "bac-lieu": [
    { value: "tat-ca", label: "Tất cả" },
    { value: "phuong-1", label: "Phường 1" },
    { value: "xa-hiep-thanh", label: "Xã Hiệp Thành" },
  ],
  "soc-trang": [
    { value: "tat-ca", label: "Tất cả" },
    { value: "phuong-2", label: "Phường 2" },
    { value: "xa-an-hiep", label: "Xã An Hiệp" },
  ],
  "can-tho": [
    { value: "tat-ca", label: "Tất cả" },
    { value: "phuong-an-khanh", label: "Phường An Khánh" },
    { value: "xa-vinh-trinh", label: "Xã Vĩnh Trinh" },
  ],
  "hau-giang": [{ value: "tat-ca", label: "Tất cả" }],
  "vinh-long": [{ value: "tat-ca", label: "Tất cả" }],
  "kien-giang": [{ value: "tat-ca", label: "Tất cả" }],
};

// ===== Panel "Công ty/HTX" =====
export const companyTypes = [
  { id: "htx-dich-vu", iconName: "Users", label: "Hợp tác xã" },
  { id: "cong-ty", iconName: "Building2", label: "Công ty TNHH" },
];

export const companyList = [
  {
    id: "ct1",
    type: "htx-dich-vu",
    name: "Hợp tác xã Dịch vụ Nông nghiệp Lý",
    province: "Tỉnh Cà Mau",
  },
  {
    id: "ct2",
    type: "htx-dich-vu",
    name: "HTX Phát triển bền vững Xã Tân Thu...",
    province: "Tỉnh Cà Mau",
  },
  {
    id: "ct3",
    type: "htx-dich-vu",
    name: "HTX Phát triển bền vững Xã Hàm Rồ...",
    province: "Tỉnh Cà Mau",
  },
  {
    id: "ct4",
    type: "cong-ty",
    name: "Công ty TNHH Nông nghiệp Xanh",
    province: "Tỉnh Cà Mau",
  },
];