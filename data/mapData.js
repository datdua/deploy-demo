// data/mapData.js
// Toàn bộ dữ liệu giả lập (mock data) phục vụ demo nghiệp vụ giao diện bản đồ
// Dữ liệu được tách riêng để dễ thay thế bằng API thực tế sau này.

// Danh sách nhóm lớp dữ liệu hiển thị ở sidebar trái
export const layerGroups = [
  {
    id: "vnpt-green",
    title: "VNPT Green",
    iconName: "Layers",
    defaultOpen: false,
    visible: true,
    layers: [
      {
        id: "cong-ty-htx",
        label: "Công ty/HTX",
        color: "#803c15", // green-700 (đậm hơn, viền trắng)
        visible: true,
        count: 24,
      },
            {
        id: "vung-canh-tac",
        label: "Vùng canh tác",
        color: "#16a34a", // green-600
        visible: true,
        count: 128,
      },
      {
        id: "vung-dich-benh",
        label: "Vùng dịch bệnh",
        color: "#dc2626", // red-600
        visible: true,
        count: 9,
      },
    ],
  },
  {
    id: "ban-hang",
    title: "Kênh bán hàng",
    iconName: "Store",
    defaultOpen: false,
    visible: true,
    layers: [
      {
        id: "trang-trai",
        label: "Trang trại chăn nuôi",
        color: "#d97706", // amber-600
        visible: true,
        count: 56,
      },
      {
        id: "vung-kiem-dich",
        label: "Vùng kiểm dịch",
        color: "#ea580c", // orange-600
        visible: false,
        count: 4,
      },
    ],
  },
  {
    id: "doanh-nghiep",
    title: "Doanh nghiệp",
    iconName: "Building2",
    defaultOpen: false,
    visible: true,
    layers: [
      {
        id: "vung-nuoi-trong",
        label: "Vùng nuôi trồng",
        color: "#0284c7", // sky-600
        visible: true,
        count: 37,
      },
      {
        id: "cang-ca",
        label: "Cảng cá / Bến cá",
        color: "#0369a1", // sky-700
        visible: true,
        count: 6,
      },
    ],
  },
  {
    id: "nong-ho",
    title: "Nông hộ",
    iconName: "Tractor",
    defaultOpen: false,
    visible: true,
    layers: [
      {
        id: "ranh-gioi-tinh",
        label: "Ranh giới Tỉnh/TP",
        color: "#2563eb", // blue-600
        visible: true,
        count: null,
      },
      {
        id: "ranh-gioi-huyen",
        label: "Ranh giới Huyện",
        color: "#60a5fa", // blue-400
        visible: false,
        count: null,
      },
      {
        id: "ranh-gioi-xa",
        label: "Ranh giới Xã",
        color: "#93c5fd", // blue-300
        visible: false,
        count: null,
      },
    ],
  },
];

// Các điểm đánh dấu hiển thị trên ảnh bản đồ (toạ độ tính theo % so với khung ảnh)
// Dùng để render các marker tròn đè lên ảnh nền bản đồ
export const mapMarkers = [
  { id: "m1", type: "vung-canh-tac", x: 51.0, y: 81.3, label: "Vùng canh tác lúa - Cần Thơ" },
  { id: "m2", type: "vung-canh-tac", x: 52.0, y: 83.5, label: "Vùng canh tác - Hậu Giang" },
  { id: "m3", type: "vung-canh-tac", x: 53.5, y: 84.0, label: "Vùng canh tác - Sóc Trăng" },
  { id: "m4", type: "vung-canh-tac", x: 53.8, y: 78.2, label: "Vùng canh tác - Vĩnh Long" },

  { id: "m5", type: "cong-ty-htx", x: 54.0, y: 78.0, label: "HTX Nông nghiệp Vĩnh Long" },
  { id: "m6", type: "cong-ty-htx", x: 52.5, y: 82.0, label: "Công ty TNHH Nông sản Cần Thơ" },
  { id: "m7", type: "cong-ty-htx", x: 53.6, y: 84.3, label: "HTX Lúa gạo Sóc Trăng" },

  { id: "m8", type: "vung-dich-benh", x: 51.5, y: 79.8, label: "Vùng dịch bệnh - Cần Thơ" },
  { id: "m9", type: "vung-dich-benh", x: 52.0, y: 84.5, label: "Vùng dịch bệnh - Hậu Giang" },
  { id: "m10", type: "vung-dich-benh", x: 52.8, y: 86.0, label: "Vùng dịch bệnh - Bạc Liêu" },
];

// Cấu hình thanh công cụ trên cùng (toolbar)
export const topToolbarTabs = [
  { id: "hanh-chinh", label: "Hành chính", active: false },
  { id: "cong-ty-htx", label: "Công ty/HTX", active: false },
];

// Cấu hình các nút công cụ bản đồ bên phải
export const mapToolButtons = [
  { id: "zoom-in", iconName: "Plus", tooltip: "Phóng to" },
  { id: "zoom-out", iconName: "Minus", tooltip: "Thu nhỏ" },
  { id: "locate", iconName: "Navigation", tooltip: "Vị trí của tôi" },
  { id: "compass", iconName: "Compass", tooltip: "La bàn" },
  { id: "fullscreen", iconName: "Maximize", tooltip: "Toàn màn hình" },
];

// Thông tin toạ độ / zoom hiển thị ở góc dưới phải
export const mapViewState = {
  lat: 11.3959,
  lng: 105.7682,
  zoom: 6.8,
};

// Danh sách icon thao tác trên cùng (header toolbar)
export const headerActionIcons = [
  { id: "filter", iconName: "ListFilter", tooltip: "Lọc dữ liệu" },
  { id: "search", iconName: "Search", tooltip: "Tìm kiếm" },
  { id: "measure", iconName: "Ruler", tooltip: "Đo khoảng cách" },
  { id: "draw", iconName: "Pencil", tooltip: "Vẽ ghi chú" },
  { id: "layers-compare", iconName: "Layers", tooltip: "So sánh lớp" },
  { id: "print", iconName: "Printer", tooltip: "In bản đồ" },
  { id: "share", iconName: "Share2", tooltip: "Chia sẻ" },
];
