import { useState, useMemo } from "react";
import { X, Search, MapPin, Link as LinkIcon, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { layerGroups } from "@/data/mapData";
import { lookupItems, detailTabs } from "@/data/lookupData";
import { OverviewTab, DetailTab } from "@/components/layout/DetailTabs";
import styles from "@/styles/modules/Dashboard.module.css";

// Gộp tất cả layer để lấy màu/label đồng bộ với sidebar lớp dữ liệu
const allLayers = layerGroups.flatMap((group) => group.layers);

function getLayerColor(type) {
  return allLayers.find((l) => l.id === type)?.color ?? "#64748b";
}

export default function SearchPanel({ onClose }) {
  const [keyword, setKeyword] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [activeTab, setActiveTab] = useState("tong-quan");

  const filteredItems = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) return lookupItems;
    return lookupItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.address.toLowerCase().includes(q) ||
        item.typeLabel.toLowerCase().includes(q)
    );
  }, [keyword]);

  const selectedItem = useMemo(
    () => lookupItems.find((item) => item.id === selectedId) ?? null,
    [selectedId]
  );

  const handleSelectItem = (item) => {
    setSelectedId(item.id);
    setActiveTab("tong-quan");
  };

  return (
    <div className={styles.lookupContainer}>
      {/* ===== Panel "Tra cứu" ===== */}
      <div className={styles.lookupListPanel}>
        <div className={styles.lookupListHeader}>
          <span className={styles.lookupListTitle}>Tra cứu</span>
          <button className={styles.lookupListClose} onClick={onClose} title="Đóng">
            <X size={16} />
          </button>
        </div>

        <div className={styles.lookupListSearch}>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Tìm kiếm..."
              className="h-8 pl-8 text-xs"
            />
          </div>
        </div>

        <div className={styles.lookupListCount}>{filteredItems.length} kết quả</div>

        <div className={styles.lookupListItems}>
          {filteredItems.length === 0 && (
            <div className={styles.lookupListEmpty}>
              Không tìm thấy kết quả phù hợp.
            </div>
          )}

          {filteredItems.map((item) => {
            const color = getLayerColor(item.type);
            const isActive = item.id === selectedId;
            return (
              <button
                key={item.id}
                className={`${styles.lookupListItem} ${
                  isActive ? styles.lookupListItemActive : ""
                }`}
                onClick={() => handleSelectItem(item)}
              >
                <span
                  className={styles.lookupListItemIcon}
                  style={{ backgroundColor: `${color}1A`, color }}
                >
                  <MapPin size={14} />
                </span>
                <span className={styles.lookupListItemText}>
                  <span className={styles.lookupListItemName}>{item.name}</span>
                  <span className={styles.lookupListItemType}>{item.typeLabel}</span>
                  <span className={styles.lookupListItemAddress}>
                    {item.subtitle}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== Panel "Chi tiết" ===== */}
      {selectedItem && (
        <div className={styles.detailPanel}>
          <div className={styles.detailPanelHeader}>
            <span className={styles.detailPanelTitle}>{selectedItem.name}</span>
            <button
              className={styles.detailPanelClose}
              onClick={() => setSelectedId(null)}
              title="Đóng chi tiết"
            >
              <X size={16} />
            </button>
          </div>

          <div className={styles.detailPanelTags}>
            {selectedItem.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[0.6875rem]">
                {tag}
              </Badge>
            ))}
          </div>

          <div className={styles.detailPanelMeta}>
            <div className={styles.detailPanelMetaRow}>
              <MapPin size={13} className={styles.detailPanelMetaIcon} />
              <span>{selectedItem.province}</span>
            </div>
            <div className={styles.detailPanelMetaRow}>
              <span className="font-mono">
                {selectedItem.coordinates.lat.toFixed(4)}° N,{" "}
                {selectedItem.coordinates.lng.toFixed(4)}° E
              </span>
            </div>
          </div>

          <div className={styles.detailTabs}>
            {detailTabs.map((tab) => (
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

          <div className={styles.detailTabContent}>
            {activeTab === "tong-quan" && <OverviewTab item={selectedItem} />}
            {activeTab === "chi-tiet" && <DetailTab item={selectedItem} />}
            {activeTab === "lien-ket" && <RelationsTab item={selectedItem} />}
          </div>
        </div>
      )}
    </div>
  );
}

function RelationsTab({ item }) {
  if (!item.relations || item.relations.length === 0) {
    return (
      <div className={styles.detailEmptyState}>
        Chưa có dữ liệu liên kết cho đối tượng này.
      </div>
    );
  }

  return (
    <div>
      {item.relations.map((rel) => (
        <div key={rel.id} className={styles.detailRelationItem}>
          <span className={styles.detailRelationIcon}>
            <LinkIcon size={14} />
          </span>
          <span className={styles.detailRelationText}>
            <span className={styles.detailRelationName}>{rel.name}</span>
            <span className={styles.detailRelationSubtitle}>{rel.subtitle}</span>
          </span>
          <ChevronRight size={15} className={styles.detailRelationLink} />
        </div>
      ))}
    </div>
  );
}