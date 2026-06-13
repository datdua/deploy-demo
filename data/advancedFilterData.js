// data/advancedFilterData.js
// Dữ liệu giả lập cho popup "Tìm kiếm nâng cao" (lọc theo lớp dữ liệu)

// Mỗi lớp dữ liệu (layer id trong layerGroups) có một danh sách "trường lọc" riêng.
// Mỗi trường lọc có loại (type) và danh sách giá trị có thể chọn (options).
// type: "text"  -> dropdown chọn giá trị cố định
//       "number" -> cũng hiển thị dạng dropdown chọn giá trị cố định (theo yêu cầu demo)
export const fieldDependencies = {
    "cong-ty-htx": [
        {
            // "Loài nuôi trồng" phụ thuộc "Lĩnh vực"
            target: "loai-nuoi-trong",
            source: "linh-vuc",
            // Với mỗi giá trị của source, target chỉ được chọn các value này
            rules: {
                "": ["trong-trot", "chan-nuoi", "thuy-san"], // chưa chọn lĩnh vực -> full
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"],
            },
        },
        {
            // "Loại cây trồng" chỉ được chọn (không bị khoá) khi:
            // - "Lĩnh vực" chưa chọn, hoặc = "Trồng trọt", hoặc
            // - "Loài nuôi trồng" chưa chọn, hoặc = "Loài cây trồng" (trong-trot)
            // Nếu không thoả -> field bị disable hoàn toàn (lockField).
            target: "loai-cay-trong",
            // Có thể phụ thuộc nhiều field nguồn -> dùng "sources"
            sources: ["linh-vuc", "loai-nuoi-trong"],
            // allowedValues: field nguồn có giá trị nằm trong list này
            // (hoặc rỗng "") thì KHÔNG khoá field target.
            allowedValues: {
                "linh-vuc": ["", "trong-trot"],
                "loai-nuoi-trong": ["", "trong-trot"],
            },
        },
        {
            target: "loai-vat-nuoi",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "chan-nuoi"],        // chỉ không khoá khi Lĩnh vực = Chăn nuôi hoặc chưa chọn
                "loai-nuoi-trong": ["", "chan-nuoi"], // chỉ không khoá khi Loài = Loài vật nuôi hoặc chưa chọn
            },
        },
        {
            target: "loai-thuy-san",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "thuy-san"],        // chỉ không khoá khi Lĩnh vực = Thuỷ sản hoặc chưa chọn
                "loai-nuoi-trong": ["", "thuy-san"], // chỉ không khoá khi Loài = Loài thuỷ sản hoặc chưa chọn
            },
        },
        {
            target: "dich-benh",
            multiSource: true,
            sources: ["loai-nuoi-trong", "linh-vuc"],
            // filter theo opt.group thay vì opt.value
            filterByGroup: true,
            rules: {
                "": ["chan-nuoi", "thuy-san", "trong-trot"], // full
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"],
            },
        },
    ],
    "vung-canh-tac": [
        {
            // "Loài nuôi trồng" phụ thuộc "Lĩnh vực"
            target: "loai-nuoi-trong",
            source: "linh-vuc",
            // Với mỗi giá trị của source, target chỉ được chọn các value này
            rules: {
                "": ["trong-trot", "chan-nuoi", "thuy-san"], // chưa chọn lĩnh vực -> full
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"],
            },
        },
        {
            // "Loại cây trồng" chỉ được chọn (không bị khoá) khi:
            // - "Lĩnh vực" chưa chọn, hoặc = "Trồng trọt", hoặc
            // - "Loài nuôi trồng" chưa chọn, hoặc = "Loài cây trồng" (trong-trot)
            // Nếu không thoả -> field bị disable hoàn toàn (lockField).
            target: "loai-cay-trong",
            // Có thể phụ thuộc nhiều field nguồn -> dùng "sources"
            sources: ["linh-vuc", "loai-nuoi-trong"],
            // allowedValues: field nguồn có giá trị nằm trong list này
            // (hoặc rỗng "") thì KHÔNG khoá field target.
            allowedValues: {
                "linh-vuc": ["", "trong-trot"],
                "loai-nuoi-trong": ["", "trong-trot"],
            },
        },
        {
            target: "loai-vat-nuoi",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "chan-nuoi"],        // chỉ không khoá khi Lĩnh vực = Chăn nuôi hoặc chưa chọn
                "loai-nuoi-trong": ["", "chan-nuoi"], // chỉ không khoá khi Loài = Loài vật nuôi hoặc chưa chọn
            },
        },
        {
            target: "loai-thuy-san",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "thuy-san"],        // chỉ không khoá khi Lĩnh vực = Thuỷ sản hoặc chưa chọn
                "loai-nuoi-trong": ["", "thuy-san"], // chỉ không khoá khi Loài = Loài thuỷ sản hoặc chưa chọn
            },
        },
        {
            target: "dich-benh",
            multiSource: true,
            sources: ["loai-nuoi-trong", "linh-vuc"],
            // filter theo opt.group thay vì opt.value
            filterByGroup: true,
            rules: {
                "": ["chan-nuoi", "thuy-san", "trong-trot"], // full
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"],
            },
        },
    ],
    "vung-dich-benh": [
        {
            // "Loài nuôi trồng" phụ thuộc "Lĩnh vực"
            target: "loai-nuoi-trong",
            source: "linh-vuc",
            // Với mỗi giá trị của source, target chỉ được chọn các value này
            rules: {
                "": ["trong-trot", "chan-nuoi", "thuy-san"], // chưa chọn lĩnh vực -> full
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"],
            },
        },
        {
            // "Loại cây trồng" chỉ được chọn (không bị khoá) khi:
            // - "Lĩnh vực" chưa chọn, hoặc = "Trồng trọt", hoặc
            // - "Loài nuôi trồng" chưa chọn, hoặc = "Loài cây trồng" (trong-trot)
            // Nếu không thoả -> field bị disable hoàn toàn (lockField).
            target: "loai-cay-trong",
            // Có thể phụ thuộc nhiều field nguồn -> dùng "sources"
            sources: ["linh-vuc", "loai-nuoi-trong"],
            // allowedValues: field nguồn có giá trị nằm trong list này
            // (hoặc rỗng "") thì KHÔNG khoá field target.
            allowedValues: {
                "linh-vuc": ["", "trong-trot"],
                "loai-nuoi-trong": ["", "trong-trot"],
            },
        },
        {
            target: "loai-vat-nuoi",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "chan-nuoi"],        // chỉ không khoá khi Lĩnh vực = Chăn nuôi hoặc chưa chọn
                "loai-nuoi-trong": ["", "chan-nuoi"], // chỉ không khoá khi Loài = Loài vật nuôi hoặc chưa chọn
            },
        },
        {
            target: "loai-thuy-san",
            sources: ["linh-vuc", "loai-nuoi-trong"],
            allowedValues: {
                "linh-vuc": ["", "thuy-san"],        // chỉ không khoá khi Lĩnh vực = Thuỷ sản hoặc chưa chọn
                "loai-nuoi-trong": ["", "thuy-san"], // chỉ không khoá khi Loài = Loài thuỷ sản hoặc chưa chọn
            },
        },
        {
            target: "dich-benh",
            multiSource: true,
            sources: ["loai-nuoi-trong", "linh-vuc"],
            // filter theo opt.group thay vì opt.value
            filterByGroup: true,
            rules: {
                "": ["chan-nuoi", "thuy-san", "trong-trot"], // full
                "trong-trot": ["trong-trot"],
                "chan-nuoi": ["chan-nuoi"],
                "thuy-san": ["thuy-san"],
            },
        },
    ],
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
            id: "loai-nuoi-trong",
            label: "Loài nuôi trồng",
            type: "text",
            options: [
                { value: "trong-trot", label: "Loài cây trồng" },
                { value: "chan-nuoi", label: "Loài vật nuôi" },
                { value: "thuy-san", label: "Loài thuỷ sản" }
            ]
        },
        // {
        //     id: "nhom-nong-nghiep",
        //     label: "Nhóm nông nghiệp",
        //     type: "text",
        //     options: [
        //         { value: "trong-trot", label: "Nhóm cây ăn quả" },
        //         { value: "chan-nuoi", label: "Nhóm gia cầm" },
        //         { value: "thuy-san", label: "Nhóm thuỷ sản nuôi lồng" }
        //     ]
        // },        
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
                // Chăn nuôi
                { value: "cn-01", group: "chan-nuoi", label: "Bệnh phải công bố dịch" },
                { value: "cn-02", group: "chan-nuoi", label: "Bệnh Zoonosis" },
                { value: "cn-03", group: "chan-nuoi", label: "Bệnh cấm giết mổ, chữa bệnh" },
                { value: "cn-04", group: "chan-nuoi", label: "Bệnh phải tiêm vắc-xin bắt buộc" },
                { value: "cn-05", group: "chan-nuoi", label: "Bệnh phải giám sát định kỳ" },
                // Thuỷ sản
                { value: "ts-01", group: "thuy-san", label: "Bệnh thủy sản phải công bố dịch" },
                { value: "ts-02", group: "thuy-san", label: "Bệnh nguy hiểm TS được hỗ trợ thiệt hại" },
                { value: "ts-03", group: "thuy-san", label: "Bệnh thủy sản phải giám sát chủ động" },
                { value: "ts-04", group: "thuy-san", label: "Bệnh thủy sản mới nổi cần theo dõi" },
                // Trồng trọt
                { value: "tt-01", group: "trong-trot", label: "Đối tượng kiểm dịch TV Nhóm I" },
                { value: "tt-02", group: "trong-trot", label: "Đối tượng kiểm dịch TV Nhóm II" },
                { value: "tt-03", group: "trong-trot", label: "Vật thể phải phân tích nguy cơ khi NK" },
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
        // {
        //     id: "nhom-nong-nghiep",
        //     label: "Nhóm nông nghiệp",
        //     type: "text",
        //     options: [
        //         { value: "trong-trot", label: "Nhóm cây ăn quả" },
        //         { value: "chan-nuoi", label: "Nhóm gia cầm" },
        //         { value: "thuy-san", label: "Nhóm thuỷ sản nuôi lồng" }
        //     ]
        // },        
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
                // Chăn nuôi
                { value: "cn-01", group: "chan-nuoi", label: "Bệnh phải công bố dịch" },
                { value: "cn-02", group: "chan-nuoi", label: "Bệnh Zoonosis" },
                { value: "cn-03", group: "chan-nuoi", label: "Bệnh cấm giết mổ, chữa bệnh" },
                { value: "cn-04", group: "chan-nuoi", label: "Bệnh phải tiêm vắc-xin bắt buộc" },
                { value: "cn-05", group: "chan-nuoi", label: "Bệnh phải giám sát định kỳ" },
                // Thuỷ sản
                { value: "ts-01", group: "thuy-san", label: "Bệnh thủy sản phải công bố dịch" },
                { value: "ts-02", group: "thuy-san", label: "Bệnh nguy hiểm TS được hỗ trợ thiệt hại" },
                { value: "ts-03", group: "thuy-san", label: "Bệnh thủy sản phải giám sát chủ động" },
                { value: "ts-04", group: "thuy-san", label: "Bệnh thủy sản mới nổi cần theo dõi" },
                // Trồng trọt
                { value: "tt-01", group: "trong-trot", label: "Đối tượng kiểm dịch TV Nhóm I" },
                { value: "tt-02", group: "trong-trot", label: "Đối tượng kiểm dịch TV Nhóm II" },
                { value: "tt-03", group: "trong-trot", label: "Vật thể phải phân tích nguy cơ khi NK" },
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
        // {
        //     id: "nhom-nong-nghiep",
        //     label: "Nhóm nông nghiệp",
        //     type: "text",
        //     options: [
        //         { value: "trong-trot", label: "Nhóm cây ăn quả" },
        //         { value: "chan-nuoi", label: "Nhóm gia cầm" },
        //         { value: "thuy-san", label: "Nhóm thuỷ sản nuôi lồng" }
        //     ]
        // },        
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
                // Chăn nuôi
                { value: "cn-01", group: "chan-nuoi", label: "Bệnh phải công bố dịch" },
                { value: "cn-02", group: "chan-nuoi", label: "Bệnh Zoonosis" },
                { value: "cn-03", group: "chan-nuoi", label: "Bệnh cấm giết mổ, chữa bệnh" },
                { value: "cn-04", group: "chan-nuoi", label: "Bệnh phải tiêm vắc-xin bắt buộc" },
                { value: "cn-05", group: "chan-nuoi", label: "Bệnh phải giám sát định kỳ" },
                // Thuỷ sản
                { value: "ts-01", group: "thuy-san", label: "Bệnh thủy sản phải công bố dịch" },
                { value: "ts-02", group: "thuy-san", label: "Bệnh nguy hiểm TS được hỗ trợ thiệt hại" },
                { value: "ts-03", group: "thuy-san", label: "Bệnh thủy sản phải giám sát chủ động" },
                { value: "ts-04", group: "thuy-san", label: "Bệnh thủy sản mới nổi cần theo dõi" },
                // Trồng trọt
                { value: "tt-01", group: "trong-trot", label: "Đối tượng kiểm dịch TV Nhóm I" },
                { value: "tt-02", group: "trong-trot", label: "Đối tượng kiểm dịch TV Nhóm II" },
                { value: "tt-03", group: "trong-trot", label: "Vật thể phải phân tích nguy cơ khi NK" },
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

    // "vung-dich-benh": [
    //     {
    //         id: "loai-dich-benh",
    //         label: "Loại dịch bệnh",
    //         type: "text",
    //         options: [
    //             { value: "dao-on", label: "Đạo ôn" },
    //             { value: "sau-cuon-la", label: "Sâu cuốn lá" },
    //             { value: "vang-lun", label: "Vàng lùn xoắn lá" },
    //             { value: "dich-ta-heo", label: "Dịch tả heo Châu Phi" }
    //         ]
    //     },
    //     {
    //         id: "muc-do",
    //         label: "Mức độ ảnh hưởng",
    //         type: "text",
    //         options: [
    //             { value: "nhe", label: "Nhẹ" },
    //             { value: "trung-binh", label: "Trung bình" },
    //             { value: "nang", label: "Nặng" }
    //         ]
    //     }
    // ],

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

// Trường lọc mặc định dùng khi một lớp dữ liệu chưa được khai báo
// danh sách trường lọc riêng trong filterFieldsByLayer.
export const defaultFilterFields = [
    {
        id: "ghi-chu",
        label: "Ghi chú",
        type: "text",
        options: [
            { value: "moi-cap-nhat", label: "Mới cập nhật" },
            { value: "da-xac-minh", label: "Đã xác minh" },
            { value: "can-kiem-tra", label: "Cần kiểm tra" },
        ],
    },
];