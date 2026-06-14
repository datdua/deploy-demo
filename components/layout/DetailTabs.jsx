import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { User, Phone, MapPin, ImageIcon, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  defaultContactInfo,
  defaultProductionStats,
  defaultMedia,
  defaultCertificationLogos,
  defaultDetailInfo,
} from "@/data/lookupData-additions";
import styles from "@/styles/modules/Dashboard.module.css";

/* =========================================================================
   Tab "Tổng quan"
   - Thông tin liên hệ: Người đại diện, Số điện thoại, Địa chỉ
   - Năng lực sản xuất: bar chart (Số vùng / Diện tích liên kết)
   - Hình ảnh & Truyền thông: lưới ảnh
   - Chứng nhận & Hồ sơ: logo chứng nhận
========================================================================= */
export function OverviewTab({ item }) {
  const contact = item.contactInfo ?? defaultContactInfo;
  const production = item.productionStats ?? defaultProductionStats;
  const media = item.media ?? defaultMedia;
  const certLogos = item.certificationLogos ?? defaultCertificationLogos;

  const chartData = [
    { name: "Số vùng", value: production.soVung },
    { name: "Diện tích (ha)", value: production.dienTich },
    { name: "Sản lượng (tấn)", value: production.sanLuong },
  ];

  return (
    <div className={styles.overviewSections}>
      {/* Thông tin liên hệ */}
      <Section title="Thông tin liên hệ">
        <div className={styles.detailInfoGrid}>
          <div className={styles.detailInfoRow}>
            <span className={styles.detailInfoLabel}>
              <span className="inline-flex items-center gap-1">
                <User size={12} /> Người đại diện
              </span>
            </span>
            <span className={styles.detailInfoValue}>{contact.representative}</span>
          </div>
          <div className={styles.detailInfoRow}>
            <span className={styles.detailInfoLabel}>
              <span className="inline-flex items-center gap-1">
                <Phone size={12} /> Số điện thoại
              </span>
            </span>
            <span className={styles.detailInfoValue}>{contact.phone}</span>
          </div>
          <div className={styles.detailInfoRow}>
            <span className={styles.detailInfoLabel}>
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} /> Địa chỉ
              </span>
            </span>
            <span className={styles.detailInfoValue}>{contact.address}</span>
          </div>
        </div>
      </Section>

      {/* Năng lực sản xuất */}
      <Section title="Năng lực sản xuất">
        <p className={styles.sectionSubtitle}>Thống kê liên kết</p>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                axisLine={{ stroke: "#e2e8f0" }}
                tickLine={false}
              />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }}
              />
              <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={36} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>

      {/* Hình ảnh & Truyền thông */}
      <Section title="Hình ảnh & Truyền thông">
        <div className={styles.mediaGrid}>
          {media.map((src, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={idx}
              src={src}
              alt={`Hình ảnh ${idx + 1}`}
              className={styles.mediaThumb}
            />
          ))}
          {media.length === 0 && (
            <div className={styles.mediaEmpty}>
              <ImageIcon size={18} />
              <span>Chưa có hình ảnh</span>
            </div>
          )}
        </div>
      </Section>

      {/* Chứng nhận & Hồ sơ */}
      <Section title="Chứng nhận & Hồ sơ" last>
        {certLogos.length === 0 ? (
          <div className={styles.detailEmptyState}>Chưa có chứng nhận nào.</div>
        ) : (
          <div className={styles.certLogoGrid}>
            {certLogos.map((cert) => (
              <div key={cert.name} className={styles.certLogoCard}>
                <span className={styles.certLogoBadge}>
                  <ShieldCheck size={16} />
                  <span>{cert.logo}</span>
                </span>
                <span className={styles.certLogoName}>{cert.name}</span>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}

/* =========================================================================
   Tab "Chi tiết"
   - Tên công ty/HTX, Loại hình, Lĩnh vực, Nông sản, Số vùng liên kết,
     Diện tích liên kết (ha), Sản lượng (tấn), Địa chỉ
========================================================================= */
export function DetailTab({ item }) {
  const info = item.detailInfo ?? defaultDetailInfo;

  return (
    <Section title="Thông tin chi tiết" noPaddingTop last>
      <div className={styles.detailInfoGrid}>
        <div className={styles.detailInfoRow}>
          <span className={styles.detailInfoLabel}>Tên công ty/HTX</span>
          <span className={styles.detailInfoValue}>{info.companyName}</span>
        </div>
        <div className={styles.detailInfoRow}>
          <span className={styles.detailInfoLabel}>Loại hình</span>
          <span className={styles.detailInfoValue}>{info.businessType}</span>
        </div>
        <div className={styles.detailInfoRow}>
          <span className={styles.detailInfoLabel}>Lĩnh vực</span>
          <span className={styles.detailInfoValue}>{info.businessLine}</span>
        </div>
        <div className={styles.detailInfoRow}>
          <span className={styles.detailInfoLabel}>Nông sản</span>
          <span className={styles.detailInfoValue}>
            {info.products.length > 0 ? (
              <span className={styles.detailProductTags}>
                {info.products.map((p) => (
                  <Badge key={p} variant="outline" className="text-[0.6875rem]">
                    {p}
                  </Badge>
                ))}
              </span>
            ) : (
              "—"
            )}
          </span>
        </div>
        <div className={styles.detailInfoRow}>
          <span className={styles.detailInfoLabel}>Số vùng liên kết</span>
          <span className={styles.detailInfoValue}>{info.soVungLienKet}</span>
        </div>
        <div className={styles.detailInfoRow}>
          <span className={styles.detailInfoLabel}>Diện tích liên kết (ha)</span>
          <span className={styles.detailInfoValue}>
            {info.dienTichLienKet.toLocaleString("vi-VN")}
          </span>
        </div>
        <div className={styles.detailInfoRow}>
          <span className={styles.detailInfoLabel}>Sản lượng (tấn)</span>
          <span className={styles.detailInfoValue}>{info.sanLuong}</span>
        </div>
        <div className={styles.detailInfoRow}>
          <span className={styles.detailInfoLabel}>Địa chỉ</span>
          <span className={styles.detailInfoValue}>{info.address}</span>
        </div>
      </div>
    </Section>
  );
}

/* ===== Helper: khối có tiêu đề, dùng chung cho tab Tổng quan ===== */
function Section({ title, children, last, noPaddingTop }) {
  return (
    <div
      className={`${styles.overviewSection} ${last ? styles.overviewSectionLast : ""} ${
        noPaddingTop ? styles.overviewSectionNoPadTop : ""
      }`}
    >
      <h4 className={styles.overviewSectionTitle}>{title}</h4>
      {children}
    </div>
  );
}