import { useState, useRef, useEffect } from "react";
import { Map as MapIcon, Search, ListFilter, Ruler, Pencil, Layers, Printer, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdminFilterPanel from "@/components/layout/AdminFilterPanel";
import CompanyFilterPanel from "@/components/layout/CompanyFilterPanel";
import AdvancedFilterPanel from "@/components/layout/AdvancedFilterPanel";
import { topToolbarTabs, headerActionIcons } from "@/data/mapData";
import styles from "@/styles/modules/Dashboard.module.css";

const iconMap = {
  Search,
  ListFilter,
  Ruler,
  Pencil,
  Layers,
  Printer,
  Share2,
};

export default function Header({ onToggleSearchPanel, isSearchPanelOpen }) {
  // Lưu id của tab đang mở panel (hanh-chinh / cong-ty-htx), null nếu không có panel nào mở
  const [openTab, setOpenTab] = useState(null);
  // Trạng thái mở/đóng popup "Tìm kiếm nâng cao" (icon filter)
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);

  const wrapperRef = useRef(null);
  const filterWrapperRef = useRef(null);

  const handleTabClick = (tabId) => {
    setOpenTab((prev) => (prev === tabId ? null : tabId));
  };

  // Đóng panel khi click ra ngoài vùng tabs/panel
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpenTab(null);
      }
      if (
        filterWrapperRef.current &&
        !filterWrapperRef.current.contains(e.target)
      ) {
        setShowAdvancedFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerBrand}>
        <MapIcon size={18} />
        <span>VNPT GREEN 2.0</span>
      </div>

      <div className={styles.headerSearch}>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm trên bản đồ..."
            className="h-8 pl-8 text-xs"
          />
        </div>
      </div>

      <div className={styles.headerTabs} ref={wrapperRef}>
        {topToolbarTabs.map((tab) => (
          <div key={tab.id} className={styles.headerTabWrapper}>
            <Button
              variant={openTab === tab.id || tab.active ? "secondary" : "ghost"}
              size="sm"
              className="h-8 text-xs font-medium"
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </Button>

            {openTab === tab.id && tab.id === "hanh-chinh" && (
              <AdminFilterPanel onClose={() => setOpenTab(null)} />
            )}
            {openTab === tab.id && tab.id === "cong-ty-htx" && (
              <CompanyFilterPanel onSelect={() => setOpenTab(null)} />
            )}
          </div>
        ))}
      </div>

      <div className={styles.headerSpacer} />

      <div className={styles.headerActions}>
        {headerActionIcons.map((action) => {
          const Icon = iconMap[action.iconName];

          // Icon "filter" mở popup Tìm kiếm nâng cao
          if (action.id === "filter") {
            return (
              <div
                key={action.id}
                className={styles.advFilterWrapper}
                ref={filterWrapperRef}
              >
                <Button
                  variant={showAdvancedFilter ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8 text-muted-foreground"
                  title={action.tooltip}
                  onClick={() => setShowAdvancedFilter((prev) => !prev)}
                >
                  <Icon size={16} />
                </Button>
                {showAdvancedFilter && (
                  <AdvancedFilterPanel
                    onClose={() => setShowAdvancedFilter(false)}
                  />
                )}
              </div>
            );
          }

          // Icon "search" mở/đóng panel "Tra cứu" + "Chi tiết" trên bản đồ
          if (action.id === "search") {
            return (
              <Button
                key={action.id}
                variant={isSearchPanelOpen ? "secondary" : "ghost"}
                size="icon"
                className="h-8 w-8 text-muted-foreground"
                title={action.tooltip}
                onClick={onToggleSearchPanel}
              >
                <Icon size={16} />
              </Button>
            );
          }

          return (
            <Button
              key={action.id}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground"
              title={action.tooltip}
            >
              <Icon size={16} />
            </Button>
          );
        })}
      </div>
    </header>
  );
}