import { useState } from "react";
import { Plus, Minus, Navigation, Compass, Maximize, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchPanel from "@/components/layout/SearchPanel";
import DataTablePanel from "@/components/layout/DataTablePanel";
import { OverviewTab, DetailTab } from "@/components/layout/DetailTabs";
import {
  mapMarkers,
  mapToolButtons,
  mapViewState,
  layerGroups,
} from "@/data/mapData";
import { lookupItems, detailTabs } from "@/data/lookupData";
import styles from "@/styles/modules/Dashboard.module.css";

const iconMap = {
  Plus,
  Minus,
  Navigation,
  Compass,
  Maximize,
};

// Lấy màu + kích thước marker dựa vào loại lớp dữ liệu
function getMarkerStyle(type) {
  for (const group of layerGroups) {
    const layer = group.layers.find((l) => l.id === type);
    if (layer) {
      return {
        color: layer.color,
        size: type === "cong-ty-htx" ? "lg" : "sm",
      };
    }
  }
  return { color: "#64748b", size: "sm" };
}

export default function MapView({ showSearchPanel, onCloseSearchPanel, showDataTable, onCloseDataTable }) {
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <div className={styles.mapArea}>
      {/* Ảnh nền bản đồ (placeholder demo) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/map-background.png"
        alt="Bản đồ demo"
        className={styles.mapImage}
      />

      {/* Lớp overlay chứa các marker */}
      <div className={styles.mapOverlay}>
        {mapMarkers.map((marker) => {
          const { color, size } = getMarkerStyle(marker.type);
          return (
            <div
              key={marker.id}
              className={`${styles.marker} ${
                size === "lg" ? styles.markerLg : styles.markerSm
              }`}
              style={{ left: `${marker.x}%`, top: `${marker.y}%`, backgroundColor: color }}
              title={marker.label}
              onClick={() =>
                setActiveMarker(activeMarker === marker.id ? null : marker.id)
              }
            />
          );
        })}
      </div>

      {/* Nhãn ghi chú demo */}
      {/* <div className={styles.demoLabel}>
        <ImageIcon size={12} className="inline mr-1 -mt-0.5" />
        Bản đồ minh hoạ (demo nghiệp vụ)
      </div> */}

      {/* Thanh công cụ bản đồ bên phải */}
      <div className={styles.mapToolbar}>
        <div className={styles.mapToolGroup}>
          {mapToolButtons.slice(0, 2).map((tool) => {
            const Icon = iconMap[tool.iconName];
            return (
              <button key={tool.id} className={styles.mapToolButton} title={tool.tooltip}>
                <Icon size={16} />
              </button>
            );
          })}
        </div>
        <div className={styles.mapToolGroup}>
          {mapToolButtons.slice(2).map((tool) => {
            const Icon = iconMap[tool.iconName];
            return (
              <button key={tool.id} className={styles.mapToolButton} title={tool.tooltip}>
                <Icon size={16} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Mini map / chuyển kiểu nền */}
      <div className={styles.miniMap} title="Đổi kiểu bản đồ">
        <div className={styles.miniMapLabel}>Lớp</div>
      </div>

      {/* Toạ độ + mức zoom */}
      <div className={styles.coordBadge}>
        {mapViewState.lat.toFixed(4)}° N, {mapViewState.lng.toFixed(4)}° E | Zoom: {mapViewState.zoom}
      </div>

      {/* Popup thông tin marker đang chọn */}
      {activeMarker && (
        <MarkerPopup
          marker={mapMarkers.find((m) => m.id === activeMarker)}
          onClose={() => setActiveMarker(null)}
        />
      )}

      {/* Panel "Tra cứu" + "Chi tiết" (mở từ icon search trên header) */}
      {showSearchPanel && <SearchPanel onClose={onCloseSearchPanel} />}

      {showDataTable && <DataTablePanel onClose={onCloseDataTable} />}  
    </div>
  );
}

function MarkerPopup({ marker, onClose }) {
  if (!marker) return null;
  const { color } = getMarkerStyle(marker.type);
  const item = lookupItems.find((it) => it.id === marker.lookupItemId);

  // Chỉ lấy 2 tab "Tổng quan" và "Chi tiết" (không hiển thị tab "Liên kết")
  const tabs = detailTabs.filter((t) => t.id === "tong-quan" || t.id === "chi-tiet");
  const [activeTab, setActiveTab] = useState("tong-quan");

  return (
    <div
      className={`${styles.detailPanel} ${styles.markerPopup} absolute z-20`}
      style={{
        left: `${marker.x}%`,
        top: `${marker.y}%`,
        transform: "translate(-50%, -100%)",
        marginTop: "-12px",
        maxHeight: "70vh",
      }}
    >
      <div className={styles.detailPanelHeader}>
        <span className={styles.detailPanelTitle}>
          <span
            className="inline-block w-2.5 h-2.5 rounded-full border border-white mr-1.5 align-middle"
            style={{ backgroundColor: color }}
          />
          {item ? item.name : marker.label}
        </span>
        <Button variant="ghost" size="icon" className="h-5 w-5 -mr-1" onClick={onClose}>
          ×
        </Button>
      </div>

      {item ? (
        <>
          <div className={styles.detailPanelTags}>
            {item.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[0.6875rem] font-medium text-slate-600">
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.detailPanelMeta}>
            <div className={styles.detailPanelMetaRow}>
              <span>{item.province}</span>
            </div>
            <div className={styles.detailPanelMetaRow}>
              <span className="font-mono">
                {item.coordinates.lat.toFixed(4)}° N, {item.coordinates.lng.toFixed(4)}° E
              </span>
            </div>
          </div>

          <div className={styles.detailTabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.detailTabButton} ${
                  activeTab === tab.id ? styles.detailTabButtonActive : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.detailTabContent} style={{ overflowY: "auto" }}>
            {activeTab === "tong-quan" && <OverviewTab item={item} />}
            {activeTab === "chi-tiet" && <DetailTab item={item} />}
          </div>
        </>
      ) : (
        <div className={styles.detailTabContent}>
          <p className="text-muted-foreground text-xs">
            Chưa có dữ liệu chi tiết cho điểm này.
          </p>
        </div>
      )}
    </div>
  );
}