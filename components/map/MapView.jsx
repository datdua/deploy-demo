import { useState } from "react";
import { Plus, Minus, Navigation, Compass, Maximize, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  mapMarkers,
  mapToolButtons,
  mapViewState,
  layerGroups,
} from "@/data/mapData";
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

export default function MapView() {
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
    </div>
  );
}

function MarkerPopup({ marker, onClose }) {
  if (!marker) return null;
  const { color } = getMarkerStyle(marker.type);

  return (
    <div
      className="absolute z-20 bg-white rounded-md shadow-lg border p-3 text-xs w-56"
      style={{
        left: `${marker.x}%`,
        top: `${marker.y}%`,
        transform: "translate(-50%, -130%)",
      }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full border border-white"
            style={{ backgroundColor: color }}
          />
          <span className="font-semibold text-foreground">{marker.label}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 -mr-1"
          onClick={onClose}
        >
          ×
        </Button>
      </div>
      <p className="text-muted-foreground">
        ID khu vực: <span className="font-mono">{marker.id.toUpperCase()}</span>
      </p>
      <p className="text-muted-foreground mt-0.5">
        Đây là dữ liệu minh hoạ phục vụ demo bố cục giao diện.
      </p>
    </div>
  );
}
