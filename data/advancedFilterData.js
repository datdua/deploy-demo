export const fieldDependencies = {
    "cong-ty-htx": [
        {
            target: "loai-nuoi-trong",
            multiSource: true,
            sources: ["nhom-nuoi-trong", "linh-vuc"],
            filterByGroup: true,
            transitiveVia: "nhom-nuoi-trong",
        },
        {
            target: "nhom-nuoi-trong",
            source: "linh-vuc",
            filterByGroup: true,
            rules: {
                "": ["trong-trot", "chan-nuoi", "thuy-san"],
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"]
            }
        },
        {
            target: "loai-cay-trong",
            sources: ["linh-vuc"],
            allowedValues: {
                "linh-vuc": ["", "trong-trot"],
            }
        },
        {
            target: "loai-vat-nuoi",
            sources: ["linh-vuc"],
            allowedValues: {
                "linh-vuc": ["", "chan-nuoi"],
            }
        },
        {
            target: "loai-thuy-san",
            sources: ["linh-vuc"],
            allowedValues: {
                "linh-vuc": ["", "thuy-san"],
            }
        },
        {
            target: "dich-benh",
            multiSource: true,
            sources: ["loai-nuoi-trong", "linh-vuc"],
            filterByGroup: true,
            rules: {
                "": ["chan-nuoi", "thuy-san", "trong-trot"],
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"]
            }
        }
    ],
    "vung-canh-tac": [
        {
            target: "loai-nuoi-trong",
            source: "linh-vuc",
            rules: {
                "": ["trong-trot", "chan-nuoi", "thuy-san"],
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"]
            }
        },
        {
            target: "loai-cay-trong",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "trong-trot"],
                "loai-nuoi-trong": ["", "trong-trot"]
            }
        },
        {
            target: "loai-vat-nuoi",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "chan-nuoi"],
                "loai-nuoi-trong": ["", "chan-nuoi"]
            }
        },
        {
            target: "loai-thuy-san",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "thuy-san"],
                "loai-nuoi-trong": ["", "thuy-san"]
            }
        },
        {
            target: "dich-benh",
            multiSource: true,
            sources: ["loai-nuoi-trong", "linh-vuc"],
            filterByGroup: true,
            rules: {
                "": ["chan-nuoi", "thuy-san", "trong-trot"],
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"]
            }
        }
    ],
    "vung-dich-benh": [
        {
            target: "loai-nuoi-trong",
            source: "linh-vuc",
            rules: {
                "": ["trong-trot", "chan-nuoi", "thuy-san"],
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"]
            }
        },
        {
            target: "loai-cay-trong",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "trong-trot"],
                "loai-nuoi-trong": ["", "trong-trot"]
            }
        },
        {
            target: "loai-vat-nuoi",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "chan-nuoi"],
                "loai-nuoi-trong": ["", "chan-nuoi"]
            }
        },
        {
            target: "loai-thuy-san",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "thuy-san"],
                "loai-nuoi-trong": ["", "thuy-san"]
            }
        },
        {
            target: "dich-benh",
            multiSource: true,
            sources: ["loai-nuoi-trong", "linh-vuc"],
            filterByGroup: true,
            rules: {
                "": ["chan-nuoi", "thuy-san", "trong-trot"],
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"]
            }
        }
    ]
};
export const filterFieldsByLayer = {
    "cong-ty-htx": [
        {
            id: "linh-vuc",
            label: "Lĩnh vực",
            type: "text",
            options: [
                { value: "trong-trot", label: "Trồng trọt" },
                { value: "chan-nuoi", label: "Chăn nuôi" },
                { value: "thuy-san", label: "Thuỷ sản" }
            ]
        },
        {
            id: "nhom-nuoi-trong",
            label: "Nhóm nuôi trồng",
            type: "text",
            options: [
                {
                    value: "cay-luong-thuc",
                    group: "trong-trot",
                    label: "Cây lương thực"
                },
                {
                    value: "cay-thuc-pham",
                    group: "trong-trot",
                    label: "Cây thực phẩm"
                },
                {
                    value: "cay-an-qua",
                    group: "trong-trot",
                    label: "Cây ăn quả"
                },
                {
                    value: "cay-cong-nghiep-ngan-ngay",
                    group: "trong-trot",
                    label: "Cây công nghiệp ngắn ngày"
                },
                {
                    value: "cay-cong-nghiep-lau-nam",
                    group: "trong-trot",
                    label: "Cây công nghiệp lâu năm"
                },
                {
                    value: "cay-duoc-lieu",
                    group: "trong-trot",
                    label: "Cây dược liệu"
                },
                {
                    value: "cay-gia-vi",
                    group: "trong-trot",
                    label: "Cây gia vị"
                },
                { value: "cay-hoa", group: "trong-trot", label: "Cây hoa" },
                { value: "cay-canh", group: "trong-trot", label: "Cây cảnh" },
                { value: "rau-mau", group: "trong-trot", label: "Rau màu" },
                {
                    value: "cay-thuc-an-chan-nuoi",
                    group: "trong-trot",
                    label: "Cây thức ăn chăn nuôi"
                },
                {
                    value: "gia-suc-lon",
                    group: "chan-nuoi",
                    label: "Gia súc lớn"
                },
                {
                    value: "gia-suc-nho",
                    group: "chan-nuoi",
                    label: "Gia súc nhỏ"
                },
                { value: "gia-cam", group: "chan-nuoi", label: "Gia cầm" },
                { value: "ong", group: "chan-nuoi", label: "Ong" },
                {
                    value: "dong-vat-dac-san",
                    group: "chan-nuoi",
                    label: "Động vật đặc sản"
                },
                {
                    value: "chan-nuoi-lay-thit",
                    group: "chan-nuoi",
                    label: "Chăn nuôi lấy thịt"
                },
                {
                    value: "chan-nuoi-lay-trung",
                    group: "chan-nuoi",
                    label: "Chăn nuôi lấy trứng"
                },
                {
                    value: "chan-nuoi-lay-sua",
                    group: "chan-nuoi",
                    label: "Chăn nuôi lấy sữa"
                },
                {
                    value: "chan-nuoi-huu-co",
                    group: "chan-nuoi",
                    label: "Chăn nuôi hữu cơ"
                },
                {
                    value: "nuoi-ca-nuoc-ngot",
                    group: "thuy-san",
                    label: "Nuôi cá nước ngọt"
                },
                {
                    value: "nuoi-ca-nuoc-lo",
                    group: "thuy-san",
                    label: "Nuôi cá nước lợ"
                },
                {
                    value: "nuoi-ca-bien",
                    group: "thuy-san",
                    label: "Nuôi cá biển"
                },
                { value: "nuoi-tom", group: "thuy-san", label: "Nuôi tôm" },
                {
                    value: "nuoi-cua-ghe",
                    group: "thuy-san",
                    label: "Nuôi cua ghẹ"
                },
                {
                    value: "nuoi-nhuyen-the",
                    group: "thuy-san",
                    label: "Nuôi nhuyễn thể"
                },
                {
                    value: "nuoi-thuy-san-dac-san",
                    group: "thuy-san",
                    label: "Nuôi thủy sản đặc sản"
                },
                {
                    value: "nuoi-thuy-san-nuoc-lanh",
                    group: "thuy-san",
                    label: "Nuôi thủy sản nước lạnh"
                },
                {
                    value: "nuoi-thuy-san-cong-nghe-cao",
                    group: "thuy-san",
                    label: "Nuôi thủy sản công nghệ cao"
                }
            ]
        },
        {
            id: "loai-nuoi-trong",
            label: "Loài nuôi trồng",
            type: "text",
            options: [
                { value: "lua", group: "cay-luong-thuc", label: "Lúa" },
                { value: "ngo", group: "cay-luong-thuc", label: "Ngô" },
                { value: "san", group: "cay-luong-thuc", label: "Sắn" },
                { value: "dau-tuong", group: "cay-thuc-pham", label: "Đậu tương" },
                { value: "lac", group: "cay-thuc-pham", label: "Lạc" },
                { value: "dau-xanh", group: "cay-thuc-pham", label: "Đậu xanh" },
                { value: "cam", group: "cay-an-qua", label: "Cam" },
                { value: "buoi", group: "cay-an-qua", label: "Bưởi" },
                { value: "xoai", group: "cay-an-qua", label: "Xoài" },
                { value: "sau-rieng", group: "cay-an-qua", label: "Sầu riêng" },
                { value: "mia", group: "cay-cong-nghiep-ngan-ngay", label: "Mía" },
                { value: "thuoc-la", group: "cay-cong-nghiep-ngan-ngay", label: "Thuốc lá" },
                { value: "bong-vai", group: "cay-cong-nghiep-ngan-ngay", label: "Bông vải" },
                { value: "ca-phe", group: "cay-cong-nghiep-lau-nam", label: "Cà phê" },
                { value: "cao-su", group: "cay-cong-nghiep-lau-nam", label: "Cao su" },
                { value: "ho-tieu", group: "cay-cong-nghiep-lau-nam", label: "Hồ tiêu" },
                { value: "nghe", group: "cay-duoc-lieu", label: "Nghệ" },
                { value: "gung", group: "cay-duoc-lieu", label: "Gừng" },
                { value: "dinh-lang", group: "cay-duoc-lieu", label: "Đinh lăng" },
                { value: "ot", group: "cay-gia-vi", label: "Ớt" },
                { value: "toi", group: "cay-gia-vi", label: "Tỏi" },
                { value: "hanh", group: "cay-gia-vi", label: "Hành" },
                { value: "hoa-hong", group: "cay-hoa", label: "Hoa hồng" },
                { value: "hoa-cuc", group: "cay-hoa", label: "Hoa cúc" },
                { value: "hoa-lan", group: "cay-hoa", label: "Hoa lan" },
                { value: "mai-vang", group: "cay-canh", label: "Mai vàng" },
                { value: "dao", group: "cay-canh", label: "Đào" },
                { value: "sanh", group: "cay-canh", label: "Sanh" },
                { value: "rau-muong", group: "rau-mau", label: "Rau muống" },
                { value: "cai-xanh", group: "rau-mau", label: "Cải xanh" },
                { value: "xa-lach", group: "rau-mau", label: "Xà lách" },
                { value: "co-voi", group: "cay-thuc-an-chan-nuoi", label: "Cỏ voi" },
                { value: "ngo-sinh-khoi", group: "cay-thuc-an-chan-nuoi", label: "Ngô sinh khối" },
                { value: "co-ghine", group: "cay-thuc-an-chan-nuoi", label: "Cỏ Ghine" },
                { value: "bo", group: "gia-suc-lon", label: "Bò" },
                { value: "trau", group: "gia-suc-lon", label: "Trâu" },
                { value: "heo", group: "gia-suc-nho", label: "Heo" },
                { value: "de", group: "gia-suc-nho", label: "Dê" },
                { value: "cuu", group: "gia-suc-nho", label: "Cừu" },
                { value: "ga", group: "gia-cam", label: "Gà" },
                { value: "vit", group: "gia-cam", label: "Vịt" },
                { value: "chim-cut", group: "gia-cam", label: "Chim cút" },
                { value: "ong-mat", group: "ong", label: "Ong mật" },
                { value: "ong-ruoi", group: "ong", label: "Ong ruồi" },
                { value: "nhim", group: "dong-vat-dac-san", label: "Nhím" },
                { value: "dui", group: "dong-vat-dac-san", label: "Dúi" },
                { value: "huou", group: "dong-vat-dac-san", label: "Hươu" },
                { value: "ca-tra", group: "nuoi-ca-nuoc-ngot", label: "Cá tra" },
                { value: "ca-ro-phi", group: "nuoi-ca-nuoc-ngot", label: "Cá rô phi" },
                { value: "ca-chep", group: "nuoi-ca-nuoc-ngot", label: "Cá chép" },
                { value: "ca-doi", group: "nuoi-ca-nuoc-lo", label: "Cá đối" },
                { value: "ca-khoai", group: "nuoi-ca-nuoc-lo", label: "Cá khoai" },
                { value: "ca-ngu", group: "nuoi-ca-bien", label: "Cá ngừ" },
                { value: "ca-mu", group: "nuoi-ca-bien", label: "Cá mú" },
                { value: "tom-su", group: "nuoi-tom", label: "Tôm sú" },
                { value: "tom-the", group: "nuoi-tom", label: "Tôm thẻ chân trắng" },
                { value: "cua-bien", group: "nuoi-cua-ghe", label: "Cua biển" },
                { value: "ghe-xanh", group: "nuoi-cua-ghe", label: "Ghẹ xanh" },
                { value: "hau", group: "nuoi-nhuyen-the", label: "Hàu" },
                { value: "ngheu", group: "nuoi-nhuyen-the", label: "Nghêu" },
                { value: "tom-hum", group: "nuoi-thuy-san-dac-san", label: "Tôm hùm" },
                { value: "ba-ba", group: "nuoi-thuy-san-dac-san", label: "Ba ba" },
                { value: "ca-hoi", group: "nuoi-thuy-san-nuoc-lanh", label: "Cá hồi" },
                { value: "ca-tam", group: "nuoi-thuy-san-nuoc-lanh", label: "Cá tầm" },
                { value: "tom-cong-nghe-cao", group: "nuoi-thuy-san-cong-nghe-cao", label: "Tôm công nghệ cao" },
                { value: "ca-cong-nghe-cao", group: "nuoi-thuy-san-cong-nghe-cao", label: "Cá công nghệ cao" }
            ]
        },
        {
            id: "mo-hinh",
            label: "Mô hình doanh nghiệp",
            type: "text",
            options: [
                { value: "lien-ket", label: "Liên kết" },
                { value: "trang-trai", label: "Trang trại" },
                { value: "nong-ho", label: "Nông hộ" },
                { value: "sieu-thi", label: "Siêu thị" }
            ]
        },
        {
            id: "dien-tich",
            label: "Diện tích (ha)",
            type: "number",
            options: [
                { value: "duoi-1", label: "Dưới 1 ha" },
                { value: "1-5", label: "1 - 5 ha" },
                { value: "5-10", label: "5 - 10 ha" },
                { value: "tren-10", label: "Trên 10 ha" }
            ]
        },
        {
            id: "dich-benh",
            label: "Dịch bệnh/Dịch hại",
            type: "select",
            options: [
                {
                    value: "cn-01",
                    group: "chan-nuoi",
                    label: "Bệnh phải công bố dịch"
                },
                { value: "cn-02", group: "chan-nuoi", label: "Bệnh Zoonosis" },
                {
                    value: "cn-03",
                    group: "chan-nuoi",
                    label: "Bệnh cấm giết mổ, chữa bệnh"
                },
                {
                    value: "cn-04",
                    group: "chan-nuoi",
                    label: "Bệnh phải tiêm vắc-xin bắt buộc"
                },
                {
                    value: "cn-05",
                    group: "chan-nuoi",
                    label: "Bệnh phải giám sát định kỳ"
                },
                {
                    value: "ts-01",
                    group: "thuy-san",
                    label: "Bệnh thủy sản phải công bố dịch"
                },
                {
                    value: "ts-02",
                    group: "thuy-san",
                    label: "Bệnh nguy hiểm TS được hỗ trợ thiệt hại"
                },
                {
                    value: "ts-03",
                    group: "thuy-san",
                    label: "Bệnh thủy sản phải giám sát chủ động"
                },
                {
                    value: "ts-04",
                    group: "thuy-san",
                    label: "Bệnh thủy sản mới nổi cần theo dõi"
                },
                {
                    value: "tt-01",
                    group: "trong-trot",
                    label: "Đối tượng kiểm dịch TV Nhóm I"
                },
                {
                    value: "tt-02",
                    group: "trong-trot",
                    label: "Đối tượng kiểm dịch TV Nhóm II"
                },
                {
                    value: "tt-03",
                    group: "trong-trot",
                    label: "Vật thể phải phân tích nguy cơ khi NK"
                }
            ]
        }
    ],
    "vung-canh-tac": [
        {
            id: "linh-vuc",
            label: "Lĩnh vực",
            type: "text",
            options: [
                { value: "trong-trot", label: "Trồng trọt" },
                { value: "chan-nuoi", label: "Chăn nuôi" },
                { value: "thuy-san", label: "Thuỷ sản" }
            ]
        },
        {
            id: "loai-nuoi-trong",
            label: "Loài nuôi trồng",
            type: "text",
            options: [
                { value: "trong-trot", label: "Loài cây trồng" },
                { value: "chan-nuoi", label: "Loài vật nuôi" },
                { value: "thuy-san", label: "Loài thuỷ sản" }
            ]
        },
        {
            id: "loai-cay-trong",
            label: "Loại cây trồng",
            type: "text",
            options: [
                { value: "lua", label: "Lúa" },
                { value: "dau-xanh", label: "Đậu xanh" },
                { value: "cu-dau", label: "Củ đậu" },
                { value: "mia", label: "Mía" }
            ]
        },
        {
            id: "loai-vat-nuoi",
            label: "Loại vật nuôi",
            type: "text",
            options: [
                { value: "ga", label: "Gà" },
                { value: "bo", label: "Bò" },
                { value: "heo", label: "Heo" },
                { value: "chuot", label: "Chuột" }
            ]
        },
        {
            id: "loai-thuy-san",
            label: "Loại thuỷ sản",
            type: "text",
            options: [
                { value: "tom", label: "Tôm" },
                { value: "ca-tra", label: "Cá tra" },
                { value: "ca-loc", label: "Cá lóc" }
            ]
        },
        {
            id: "mo-hinh",
            label: "Mô hình doanh nghiệp",
            type: "text",
            options: [
                { value: "lien-ket", label: "Liên kết" },
                { value: "trang-trai", label: "Trang trại" },
                { value: "nong-ho", label: "Nông hộ" },
                { value: "sieu-thi", label: "Siêu thị" }
            ]
        },
        {
            id: "dien-tich",
            label: "Diện tích (ha)",
            type: "number",
            options: [
                { value: "duoi-1", label: "Dưới 1 ha" },
                { value: "1-5", label: "1 - 5 ha" },
                { value: "5-10", label: "5 - 10 ha" },
                { value: "tren-10", label: "Trên 10 ha" }
            ]
        },
        {
            id: "dich-benh",
            label: "Dịch bệnh/Dịch hại",
            type: "select",
            options: [
                {
                    value: "cn-01",
                    group: "chan-nuoi",
                    label: "Bệnh phải công bố dịch"
                },
                { value: "cn-02", group: "chan-nuoi", label: "Bệnh Zoonosis" },
                {
                    value: "cn-03",
                    group: "chan-nuoi",
                    label: "Bệnh cấm giết mổ, chữa bệnh"
                },
                {
                    value: "cn-04",
                    group: "chan-nuoi",
                    label: "Bệnh phải tiêm vắc-xin bắt buộc"
                },
                {
                    value: "cn-05",
                    group: "chan-nuoi",
                    label: "Bệnh phải giám sát định kỳ"
                },
                {
                    value: "ts-01",
                    group: "thuy-san",
                    label: "Bệnh thủy sản phải công bố dịch"
                },
                {
                    value: "ts-02",
                    group: "thuy-san",
                    label: "Bệnh nguy hiểm TS được hỗ trợ thiệt hại"
                },
                {
                    value: "ts-03",
                    group: "thuy-san",
                    label: "Bệnh thủy sản phải giám sát chủ động"
                },
                {
                    value: "ts-04",
                    group: "thuy-san",
                    label: "Bệnh thủy sản mới nổi cần theo dõi"
                },
                {
                    value: "tt-01",
                    group: "trong-trot",
                    label: "Đối tượng kiểm dịch TV Nhóm I"
                },
                {
                    value: "tt-02",
                    group: "trong-trot",
                    label: "Đối tượng kiểm dịch TV Nhóm II"
                },
                {
                    value: "tt-03",
                    group: "trong-trot",
                    label: "Vật thể phải phân tích nguy cơ khi NK"
                }
            ]
        }
    ],
    "vung-dich-benh": [
        {
            id: "linh-vuc",
            label: "Lĩnh vực",
            type: "text",
            options: [
                { value: "trong-trot", label: "Trồng trọt" },
                { value: "chan-nuoi", label: "Chăn nuôi" },
                { value: "thuy-san", label: "Thuỷ sản" }
            ]
        },
        {
            id: "loai-nuoi-trong",
            label: "Loài nuôi trồng",
            type: "text",
            options: [
                { value: "trong-trot", label: "Loài cây trồng" },
                { value: "chan-nuoi", label: "Loài vật nuôi" },
                { value: "thuy-san", label: "Loài thuỷ sản" }
            ]
        },
        {
            id: "loai-cay-trong",
            label: "Loại cây trồng",
            type: "text",
            options: [
                { value: "lua", label: "Lúa" },
                { value: "dau-xanh", label: "Đậu xanh" },
                { value: "cu-dau", label: "Củ đậu" },
                { value: "mia", label: "Mía" }
            ]
        },
        {
            id: "loai-vat-nuoi",
            label: "Loại vật nuôi",
            type: "text",
            options: [
                { value: "ga", label: "Gà" },
                { value: "bo", label: "Bò" },
                { value: "heo", label: "Heo" },
                { value: "chuot", label: "Chuột" }
            ]
        },
        {
            id: "loai-thuy-san",
            label: "Loại thuỷ sản",
            type: "text",
            options: [
                { value: "tom", label: "Tôm" },
                { value: "ca-tra", label: "Cá tra" },
                { value: "ca-loc", label: "Cá lóc" }
            ]
        },
        {
            id: "mo-hinh",
            label: "Mô hình doanh nghiệp",
            type: "text",
            options: [
                { value: "lien-ket", label: "Liên kết" },
                { value: "trang-trai", label: "Trang trại" },
                { value: "nong-ho", label: "Nông hộ" },
                { value: "sieu-thi", label: "Siêu thị" }
            ]
        },
        {
            id: "dien-tich",
            label: "Diện tích (ha)",
            type: "number",
            options: [
                { value: "duoi-1", label: "Dưới 1 ha" },
                { value: "1-5", label: "1 - 5 ha" },
                { value: "5-10", label: "5 - 10 ha" },
                { value: "tren-10", label: "Trên 10 ha" }
            ]
        },
        {
            id: "dich-benh",
            label: "Dịch bệnh/Dịch hại",
            type: "select",
            options: [
                {
                    value: "cn-01",
                    group: "chan-nuoi",
                    label: "Bệnh phải công bố dịch"
                },
                { value: "cn-02", group: "chan-nuoi", label: "Bệnh Zoonosis" },
                {
                    value: "cn-03",
                    group: "chan-nuoi",
                    label: "Bệnh cấm giết mổ, chữa bệnh"
                },
                {
                    value: "cn-04",
                    group: "chan-nuoi",
                    label: "Bệnh phải tiêm vắc-xin bắt buộc"
                },
                {
                    value: "cn-05",
                    group: "chan-nuoi",
                    label: "Bệnh phải giám sát định kỳ"
                },
                {
                    value: "ts-01",
                    group: "thuy-san",
                    label: "Bệnh thủy sản phải công bố dịch"
                },
                {
                    value: "ts-02",
                    group: "thuy-san",
                    label: "Bệnh nguy hiểm TS được hỗ trợ thiệt hại"
                },
                {
                    value: "ts-03",
                    group: "thuy-san",
                    label: "Bệnh thủy sản phải giám sát chủ động"
                },
                {
                    value: "ts-04",
                    group: "thuy-san",
                    label: "Bệnh thủy sản mới nổi cần theo dõi"
                },
                {
                    value: "tt-01",
                    group: "trong-trot",
                    label: "Đối tượng kiểm dịch TV Nhóm I"
                },
                {
                    value: "tt-02",
                    group: "trong-trot",
                    label: "Đối tượng kiểm dịch TV Nhóm II"
                },
                {
                    value: "tt-03",
                    group: "trong-trot",
                    label: "Vật thể phải phân tích nguy cơ khi NK"
                }
            ]
        }
    ],
    "vung-nuoi-trong": [
        {
            id: "loai-thuy-san",
            label: "Loại thuỷ sản",
            type: "text",
            options: [
                { value: "tom", label: "Tôm" },
                { value: "ca-tra", label: "Cá tra" },
                { value: "ca-loc", label: "Cá lóc" }
            ]
        },
        {
            id: "dien-tich-nuoi",
            label: "Diện tích nuôi (ha)",
            type: "number",
            options: [
                { value: "duoi-1", label: "Dưới 1 ha" },
                { value: "1-5", label: "1 - 5 ha" },
                { value: "tren-5", label: "Trên 5 ha" }
            ]
        }
    ],
    "trang-trai": [
        {
            id: "loai-vat-nuoi",
            label: "Loại vật nuôi",
            type: "text",
            options: [
                { value: "heo", label: "Heo" },
                { value: "ga", label: "Gà" },
                { value: "bo", label: "Bò" },
                { value: "vit", label: "Vịt" }
            ]
        },
        {
            id: "quy-mo",
            label: "Quy mô đàn",
            type: "number",
            options: [
                { value: "duoi-100", label: "Dưới 100 con" },
                { value: "100-500", label: "100 - 500 con" },
                { value: "tren-500", label: "Trên 500 con" }
            ]
        }
    ]
};
export const defaultFilterFields = [
    {
        id: "ghi-chu",
        label: "Ghi chú",
        type: "text",
        options: [
            { value: "moi-cap-nhat", label: "Mới cập nhật" },
            { value: "da-xac-minh", label: "Đã xác minh" },
            { value: "can-kiem-tra", label: "Cần kiểm tra" }
        ]
    }
];