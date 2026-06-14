// data/dataTableData.js
// Dữ liệu giả lập cho panel "Bảng dữ liệu" (drawer dưới cùng MapArea),
// hiển thị khi bật toggle "Bảng dữ liệu" trong sidebar (dưới lớp "Vùng canh tác").

// ===== Tab "Thông tin" - các thẻ thống kê tổng hợp =====
export const summaryStats = [
  {
    id: "tong-so-vung-trong",
    label: "Tổng số vùng trồng",
    value: "239",
    color: "blue",
  },
  {
    id: "tong-so-nong-ho",
    label: "Tổng số nông hộ",
    value: "239",
    color: "green",
  },
  {
    id: "tong-dien-tich-canh-tac",
    label: "Tổng diện tích canh tác (ha)",
    value: "635,81",
    color: "amber",
  },
  {
    id: "tong-san-luong",
    label: "Tổng sản lượng (tấn)",
    value: "16.485,78",
    color: "purple",
  },
  {
    id: "dien-tich-dat-chung-nhan",
    label: "Diện tích đạt chứng nhận (ha)",
    value: "571,42",
    color: "red",
  },
  {
    id: "so-vung-trong-dat-chung-nhan",
    label: "Số vùng trồng đạt chứng nhận",
    value: "206",
    color: "green",
  },
  {
    id: "so-vung-da-cap-ma",
    label: "Số vùng đã cấp mã",
    value: "150",
    color: "blue",
  },
];

export const summaryNote = "Ghi chú: Mã số vùng trồng phục vụ xuất khẩu";

// ===== Tab "Biểu đồ" =====

// Biểu đồ 1: Diện tích vùng trồng theo cây trồng (bar chart)
export const areaByCropChart = [
  { name: "Chuối", value: 63, percentLabel: "63%" },
  { name: "Lúa", value: 20.8, percentLabel: "20.8%" },
  { name: "Dừa", value: 16.2, percentLabel: "16.2%" },
];

// Biểu đồ 2: Tỷ lệ đạt chứng nhận (donut chart)
export const certificationRateChart = {
  total: 239,
  unitLabel: "loại",
  segments: [
    { name: "Có", value: 206, percentLabel: "86.2%", color: "#2563eb" },
    { name: "Không", value: 33, percentLabel: "13.8%", color: "#16a34a" },
  ],
};

// Biểu đồ 3: Sản lượng vùng trồng theo cây trồng (bar chart)
export const yieldByCropChart = [
  { name: "Chuối", value: 86.2, percentLabel: "86.2%" },
  { name: "Dừa", value: 9.4, percentLabel: "9.4%" },
  { name: "Lúa", value: 5.6, percentLabel: "5.6%" },
];

// ===== Tab "Bảng dữ liệu" =====
export const dataTableColumns = [
  { id: "stt", label: "#" },
  { id: "chuHo", label: "Chủ hộ" },
  { id: "diaChi", label: "Địa chỉ chủ hộ" },
  { id: "tinhThanhPho", label: "Tỉnh/Thành phố" },
  { id: "maVungTrong", label: "Mã vùng trồng" },
  { id: "tenVungTrong", label: "Tên vùng trồng" },
  { id: "loaiCayTrong", label: "Loại cây trồng" },
  { id: "dienTich", label: "Diện tích (ha)" },
  { id: "sanLuong", label: "Sản lượng" },
  { id: "namCanhTac", label: "Năm canh tác" },
  { id: "chungNhan", label: "Chứng nhận" },
];

export const dataTableRows = [
  {
    stt: 1,
    chuHo: "Nguyễn Ngọc",
    diaChi: "78, Xã Hàm Rồng, Huyện Năm Căn, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-25",
    tenVungTrong: "Nguyễn Ngọc",
    loaiCayTrong: "Chuối",
    dienTich: "2,27",
    sanLuong: "70,48",
    namCanhTac: 2025,
    chungNhan: "VietGAP",
  },
  {
    stt: 2,
    chuHo: "THÁI NGUYÊN",
    diaChi: "82, Xã Nguyên Huân, Huyện Đầm Dơi, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-502",
    tenVungTrong: "THÁI NGUYÊN",
    loaiCayTrong: "Lúa",
    dienTich: "1,39",
    sanLuong: "6,71",
    namCanhTac: 2025,
    chungNhan: "VietGAP",
  },
  {
    stt: 3,
    chuHo: "TRÂM NGỌC TRÂM",
    diaChi: "99, Xã Nguyên Huân, Huyện Đầm Dơi, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-495",
    tenVungTrong: "NGỌC TRÂM",
    loaiCayTrong: "Dừa",
    dienTich: "7,74",
    sanLuong: "116,08",
    namCanhTac: 2026,
    chungNhan: "VietGAP",
  },
  {
    stt: 4,
    chuHo: "Phạm Đức Kiên",
    diaChi: "Ấp 4, Thị trấn Rạch Gốc, Huyện Ngọc Hiển, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-615",
    tenVungTrong: "Đức Kiên",
    loaiCayTrong: "Chuối",
    dienTich: "1,91",
    sanLuong: "66,83",
    namCanhTac: 2025,
    chungNhan: "VietGAP",
  },
  {
    stt: 5,
    chuHo: "Nguyễn Việt Phong",
    diaChi: "87, Xã Khánh Bình, Huyện Trần Văn Thời, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-003",
    tenVungTrong: "Nguyễn Việt Phong",
    loaiCayTrong: "Dừa",
    dienTich: "0,34",
    sanLuong: "5,07",
    namCanhTac: 2025,
    chungNhan: "VietGAP",
  },
  {
    stt: 6,
    chuHo: "Trương Sang",
    diaChi: "Ấp 1, Xã Hiệp Tùng, Huyện Năm Căn, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-430",
    tenVungTrong: "Trương Sang",
    loaiCayTrong: "Chuối",
    dienTich: "1,61",
    sanLuong: "11,25",
    namCanhTac: 2025,
    chungNhan: "VietGAP",
  },
  {
    stt: 7,
    chuHo: "Lý Khánh Phúc",
    diaChi: "Ấp 83, Thị trấn Rạch Gốc, Huyện Ngọc Hiển, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-601",
    tenVungTrong: "Lý Khánh Phúc",
    loaiCayTrong: "Chuối",
    dienTich: "10,63",
    sanLuong: "371,99",
    namCanhTac: 2025,
    chungNhan: "GlobalGAP",
  },
  {
    stt: 8,
    chuHo: "Trương Ấn",
    diaChi: "Ấp 1, Xã Hiệp Tùng, Huyện Năm Căn, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-580",
    tenVungTrong: "Trương Ấn",
    loaiCayTrong: "Dừa",
    dienTich: "3,99",
    sanLuong: "58,86",
    namCanhTac: 2025,
    chungNhan: "VietGAP",
  },
  {
    stt: 9,
    chuHo: "Nguyễn Định",
    diaChi: "Ấp 1, Xã Khánh Bình, Huyện Trần Văn Thời, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-001",
    tenVungTrong: "Nguyễn Định",
    loaiCayTrong: "Dừa",
    dienTich: "0,24",
    sanLuong: "3,66",
    namCanhTac: 2026,
    chungNhan: "Organic",
  },
  {
    stt: 10,
    chuHo: "Trương Lan",
    diaChi: "Ấp 1, Xã Đất Mới, Huyện Năm Căn, Tỉnh Cà Mau",
    tinhThanhPho: "Tỉnh Cà Mau",
    maVungTrong: "MSVT-CMU-369",
    tenVungTrong: "Trương Lan",
    loaiCayTrong: "Dừa",
    dienTich: "1,28",
    sanLuong: "19,23",
    namCanhTac: 2025,
    chungNhan: "VietGAP",
  },
];

export const dataTableTotalRows = 230;

// ===== Tab "Chú thích" =====
export const legendStatusItems = [
  {
    id: "da-cap-ma",
    color: "#15803d",
    title: "Đã cấp mã vùng trồng",
    description:
      "Vùng canh tác đã được cơ quan chức năng kiểm duyệt và cấp mã số.",
  },
  {
    id: "chua-cap-ma",
    color: "#bef264",
    title: "Chưa cấp mã vùng trồng",
    description:
      "Vùng canh tác đang trong quá trình đăng ký hoặc chưa được cấp mã.",
  },
];

export const legendCropItems = [
  {
    id: "cay-chuoi",
    iconName: "Banana",
    title: "Cây Chuối",
    description: "Biểu tượng đại diện cho loại cây trồng Chuối.",
  },
  {
    id: "cay-lua",
    iconName: "Wheat",
    title: "Cây Lúa",
    description: "Biểu tượng đại diện cho loại cây trồng Lúa.",
  },
  {
    id: "cay-dua",
    iconName: "Trees",
    title: "Cây Dừa",
    description: "Biểu tượng đại diện cho loại cây trồng Dừa.",
  },
];

// ===== Tab definitions =====
export const dataTableTabs = [
  { id: "thong-tin", label: "Thông tin", iconName: "Info" },
  { id: "bieu-do", label: "Biểu đồ", iconName: "BarChart2" },
  { id: "bang-du-lieu", label: "Bảng dữ liệu", iconName: "Table" },
  { id: "chu-thich", label: "Chú thích", iconName: "ListTree" },
];

// Tiêu đề panel: tên lớp + số đối tượng
export const dataTablePanelInfo = {
  layerLabel: "Vùng canh tác",
  totalCount: 239,
};