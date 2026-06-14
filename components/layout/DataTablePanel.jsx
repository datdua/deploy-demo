import { useState } from "react";
import {
  X,
  Info,
  BarChart2,
  Table as TableIcon,
  ListTree,
  Banana,
  Wheat,
  Trees,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  summaryStats,
  summaryNote,
  areaByCropChart,
  certificationRateChart,
  yieldByCropChart,
  dataTableColumns,
  dataTableRows,
  dataTableTotalRows,
  legendStatusItems,
  legendCropItems,
  dataTableTabs,
  dataTablePanelInfo,
} from "@/data/dataTableData";
import styles from "@/styles/modules/Dashboard.module.css";

const tabIconMap = {
  Info,
  BarChart2,
  Table: TableIcon,
  ListTree,
};

const cropIconMap = {
  Banana,
  Wheat,
  Trees,
};

const statCardColorClass = {
  blue: styles.statCardBlue,
  green: styles.statCardGreen,
  amber: styles.statCardAmber,
  purple: styles.statCardPurple,
  red: styles.statCardRed,
};

const BAR_COLORS = ["#2563eb", "#16a34a", "#f59e0b"];

export default function DataTablePanel({ onClose }) {
  const [activeTab, setActiveTab] = useState("thong-tin");

  return (
    <div className={styles.dataPanel}>
      <div className={styles.dataPanelHeader}>
        <span className={styles.dataPanelHeaderDot} />
        <span className={styles.dataPanelHeaderTitle}>Bảng dữ liệu</span>
        <span className={styles.dataPanelHeaderBadge}>
          {dataTablePanelInfo.layerLabel} · {dataTablePanelInfo.totalCount} đối tượng
        </span>
        <div className={styles.dataPanelHeaderSpacer} />
        <button className={styles.dataPanelClose} onClick={onClose} title="Đóng">
          <X size={16} />
        </button>
      </div>

      <div className={styles.dataPanelBody}>
        <div className={styles.dataPanelTabs}>
          {dataTableTabs.map((tab) => {
            const Icon = tabIconMap[tab.iconName] ?? Info;
            return (
              <button
                key={tab.id}
                className={`${styles.dataPanelTabButton} ${
                  activeTab === tab.id ? styles.dataPanelTabButtonActive : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className={styles.dataPanelContent}>
          {activeTab === "thong-tin" && <InfoTab />}
          {activeTab === "bieu-do" && <ChartTab />}
          {activeTab === "bang-du-lieu" && <DataTableTab />}
          {activeTab === "chu-thich" && <LegendTab />}
        </div>
      </div>
    </div>
  );
}

/* ===== Tab "Thông tin" ===== */
function InfoTab() {
  return (
    <>
      <div className={styles.statCardGrid}>
        {summaryStats.map((stat) => (
          <div
            key={stat.id}
            className={`${styles.statCard} ${statCardColorClass[stat.color] ?? ""}`}
          >
            <div className={styles.statCardLabel}>{stat.label}</div>
            <div className={styles.statCardValue}>{stat.value}</div>
          </div>
        ))}
      </div>
      <p className={styles.statCardNote}>{summaryNote}</p>
    </>
  );
}

/* ===== Tab "Biểu đồ" ===== */
function ChartTab() {
  return (
    <div className={styles.chartGrid}>
      <div className={styles.chartCard}>
        <div className={styles.chartCardTitle}>Diện tích vùng trồng theo cây trồng</div>
        <ResponsiveContainer width="100%" height={170}>
          <BarChart data={areaByCropChart} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={{ stroke: "#e2e8f0" }} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40} label={{ position: "top", fontSize: 11, fill: "#475569" }}>
              {areaByCropChart.map((entry, idx) => (
                <Cell key={entry.name} fill={BAR_COLORS[idx % BAR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.chartCard}>
        <div className={styles.chartCardTitle}>Tỷ lệ đạt chứng nhận</div>
        <ResponsiveContainer width="100%" height={170}>
          <PieChart>
            <Pie
              data={certificationRateChart.segments}
              dataKey="value"
              nameKey="name"
              innerRadius={45}
              outerRadius={65}
              paddingAngle={2}
            >
              {certificationRateChart.segments.map((seg) => (
                <Cell key={seg.name} fill={seg.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
          </PieChart>
        </ResponsiveContainer>
        <div className={styles.donutLegend}>
          {certificationRateChart.segments.map((seg) => (
            <div key={seg.name} className={styles.donutLegendItem}>
              <span className={styles.donutLegendDot} style={{ backgroundColor: seg.color }} />
              <span>
                {seg.name}: {seg.value} ({seg.percentLabel})
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.chartCard}>
        <div className={styles.chartCardTitle}>Sản lượng vùng trồng theo cây trồng</div>
        <ResponsiveContainer width="100%" height={170}>
          <BarChart data={yieldByCropChart} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={{ stroke: "#e2e8f0" }} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
              {yieldByCropChart.map((entry, idx) => (
                <Cell key={entry.name} fill={BAR_COLORS[idx % BAR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ===== Tab "Bảng dữ liệu" ===== */
function DataTableTab() {
  return (
    <div className={styles.dataTableWrapper}>
      <div className={styles.dataTableMeta}>
        Hiển thị 1 - {dataTableRows.length} trong tổng số {dataTableTotalRows} đối tượng
      </div>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            {dataTableColumns.map((col) => (
              <th key={col.id}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTableRows.map((row) => (
            <tr key={row.stt}>
              {dataTableColumns.map((col) => (
                <td key={col.id}>{row[col.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ===== Tab "Chú thích" ===== */
function LegendTab() {
  return (
    <div>
      <div className={styles.legendSection}>
        <div className={styles.legendGrid}>
          {legendStatusItems.map((item) => (
            <div key={item.id} className={styles.legendItem}>
              <span className={styles.legendSwatch} style={{ backgroundColor: item.color }} />
              <div>
                <div className={styles.legendTextTitle}>{item.title}</div>
                <div className={styles.legendTextDescription}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.legendSection}>
        <div className={styles.legendGrid}>
          {legendCropItems.map((item) => {
            const Icon = cropIconMap[item.iconName] ?? Banana;
            return (
              <div key={item.id} className={styles.legendItem}>
                <span className={styles.legendIconWrap}>
                  <Icon size={13} />
                </span>
                <div>
                  <div className={styles.legendTextTitle}>{item.title}</div>
                  <div className={styles.legendTextDescription}>{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
