// === Bổ sung vào mỗi object trong lookupItems (data/lookupData.js) ===
//
// Thêm các field mới dưới đây vào object item (ví dụ "lk-001" - HTX Lý Văn Lâm).
// Các field overview/detail/relations cũ giữ nguyên, không cần xoá.
//
// Ví dụ đầy đủ cho item "lk-001":

/*
{
  id: "lk-001",
  type: "cong-ty-htx",
  typeLabel: "Công ty/HTX",
  name: "Hợp tác xã Dịch vụ Nông nghiệp Lý Văn Lâm",
  subtitle: "53, Xã Hàm Rồng, Huyện Năm C...",
  address: "Xã Lý Văn Lâm, TP. Cà Mau, Tỉnh Cà Mau",
  province: "Tỉnh Cà Mau",
  coordinates: { lat: 9.1500, lng: 105.1300 },
  tags: ["Công ty/HTX", "Sản xuất và chế biến nông sản"],

  // ===== Dùng cho tab "Tổng quan" =====
  contactInfo: {
    representative: "Phạm Văn D",
    phone: "0901234567",
    address: "Xã Lý Văn Lâm, TP. Cà Mau, Tỉnh Cà Mau",
  },

  productionStats: {
    soVung: 51,
    dienTich: 172.6762, // ha - dùng cho cột "Diện tích liên kết"
    sanLuong: 400, // tấn - dùng cho cột "Sản lượng (tấn)"
  },

  media: [
    "https://picsum.photos/seed/htxlyvanlam1/300/200",
    "https://picsum.photos/seed/htxlyvanlam2/300/200",
    "https://picsum.photos/seed/htxlyvanlam3/300/200",
  ],

  certificationLogos: [
    { name: "VietGAP", logo: "VG" },
    { name: "ISO 22000:2018", logo: "ISO" },
    { name: "OCOP", logo: "OCOP" },
  ],

  // ===== Dùng cho tab "Chi tiết" =====
  detailInfo: {
    companyName: "Hợp tác xã Dịch vụ Nông nghiệp Lý Văn Lâm",
    businessType: "Công ty/HTX Trồng trọt",
    businessLine: "Sản xuất và chế biến nông sản",
    products: ["Chuối", "Lúa", "Dừa"],
    soVungLienKet: 51,
    dienTichLienKet: 172.6762,
    sanLuong: 400,
    address: "Xã Lý Văn Lâm, TP. Cà Mau, Tỉnh Cà Mau",
  },

  // overview, detail, relations cũ giữ nguyên...
}
*/

// ===== Helper: dữ liệu mặc định cho các item chưa có field mới =====
// Có thể import và dùng làm fallback trong component nếu item thiếu field.
export const defaultContactInfo = {
  representative: "—",
  phone: "—",
  address: "—",
};

export const defaultProductionStats = {
  soVung: 0,
  dienTich: 0,
  sanLuong: 0,
};

export const defaultMedia = [
  "https://picsum.photos/seed/placeholder1/300/200",
  "https://picsum.photos/seed/placeholder2/300/200",
  "https://picsum.photos/seed/placeholder3/300/200",
];

export const defaultCertificationLogos = [];

export const defaultDetailInfo = {
  companyName: "—",
  businessType: "—",
  businessLine: "—",
  products: [],
  soVungLienKet: 0,
  dienTichLienKet: 0,
  sanLuong: 0,
  address: "—",
};