import { useState } from "react";
import {
  ChevronRight,
  Sprout,
  Beef,
  Fish,
  Map as MapIcon,
  Eye,
  EyeOff,
  Search,
  Layers,
  PanelLeftClose,
  Store,
  Building2,
  Tractor,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { layerGroups as initialLayerGroups } from "@/data/mapData";
import styles from "@/styles/modules/Dashboard.module.css";

const groupIconMap = {
  Layers,
  Sprout,
  Beef,
  Fish,
  Store,
  Building2,
  Tractor,
  Map: MapIcon,
};

export default function LayerPanel() {
  const [groups, setGroups] = useState(initialLayerGroups);
  const [openGroups, setOpenGroups] = useState(
    initialLayerGroups.reduce((acc, g) => {
      acc[g.id] = g.defaultOpen;
      return acc;
    }, {})
  );

  const toggleGroupOpen = (groupId) => {
    setOpenGroups((prev) => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const toggleGroupVisible = (groupId) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? {
            ...g,
            visible: !g.visible,
            layers: g.layers.map((l) => ({ ...l, visible: !g.visible })),
          }
          : g
      )
    );
  };

  const toggleLayerVisible = (groupId, layerId) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? {
            ...g,
            layers: g.layers.map((l) =>
              l.id === layerId ? { ...l, visible: !l.visible } : l
            ),
          }
          : g
      )
    );
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarTitle}>
          <span>Danh sách lớp dữ liệu</span>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
          <PanelLeftClose size={15} />
        </Button>
      </div>

      <div className={styles.sidebarSearch}>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm lớp dữ liệu..."
            className="h-8 pl-8 text-xs"
          />
        </div>
      </div>

      <ScrollArea className={styles.sidebarContent}>
        {groups.map((group) => {
          const GroupIcon = groupIconMap[group.iconName] ?? MapIcon;
          const isOpen = openGroups[group.id];

          return (
            <Collapsible
              key={group.id}
              open={isOpen}
              onOpenChange={() => toggleGroupOpen(group.id)}
            >
              <div className="flex items-center">
                <CollapsibleTrigger asChild>
                  <button className={styles.groupHeader}>
                    <ChevronRight
                      size={14}
                      className={`${styles.groupChevron} ${isOpen ? styles.groupChevronOpen : ""
                        }`}
                    />
                    <GroupIcon size={15} className={styles.groupHeaderIcon} />
                    <span className={styles.groupHeaderTitle}>{group.title}</span>
                  </button>
                </CollapsibleTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 mr-1 text-muted-foreground flex-shrink-0"
                  onClick={() => toggleGroupVisible(group.id)}
                  title={group.visible ? "Ẩn nhóm lớp" : "Hiện nhóm lớp"}
                >
                  {group.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                </Button>
              </div>

              <CollapsibleContent>
                {group.layers.map((layer) => (
                  <label key={layer.id} className={styles.layerRow}>
                    {/* <Checkbox
                      checked={layer.visible}
                      onCheckedChange={() =>
                        toggleLayerVisible(group.id, layer.id)
                      }
                    /> */}
                    <span
                      className={styles.layerDot}
                      style={{ backgroundColor: layer.color }}
                    />
                    <span className={styles.layerLabel}>{layer.label}</span>
                    {/* {layer.count !== null && (
                      <span className={styles.layerCount}>{layer.count}</span>
                    )} */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 mr-1 text-muted-foreground flex-shrink-0"
                      onClick={() => toggleLayerVisible(group.id, layer.id)}
                      title={layer.visible ? "Ẩn lớp" : "Hiện lớp"}
                    >
                      {layer.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                    </Button>
                  </label>
                ))}
            </CollapsibleContent>
            </Collapsible>
      );
        })}
    </ScrollArea>
    </aside >
  );
}
