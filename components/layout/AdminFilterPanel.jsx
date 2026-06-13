import { useState } from "react";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { provinces, wardsByProvince } from "@/data/headerFilterData";
import styles from "@/styles/modules/Dashboard.module.css";

export default function AdminFilterPanel({ onClose }) {
  const [province, setProvince] = useState("tat-ca");
  const [ward, setWard] = useState("tat-ca");

  const wardOptions = wardsByProvince[province] ?? wardsByProvince["tat-ca"];

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setWard("tat-ca");
  };

  const handleReset = () => {
    setProvince("tat-ca");
    setWard("tat-ca");
  };

  const handleApply = () => {
    // TODO: gắn logic lọc dữ liệu bản đồ theo province/ward
    onClose?.();
  };

  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterPanelField}>
        <label className={styles.filterPanelLabel}>Tỉnh/Thành phố</label>
        <Select value={province} onChange={handleProvinceChange}>
          {provinces.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </Select>
      </div>

      <div className={styles.filterPanelField}>
        <label className={styles.filterPanelLabel}>Xã/Phường</label>
        <Select value={ward} onChange={(e) => setWard(e.target.value)}>
          {wardOptions.map((w) => (
            <option key={w.value} value={w.value}>
              {w.label}
            </option>
          ))}
        </Select>
      </div>

      <div className={styles.filterPanelActions}>
        <Button variant="outline" size="sm" className="text-xs" onClick={handleReset}>
          Xoá bộ lọc
        </Button>
        <Button size="sm" className="text-xs" onClick={handleApply}>
          Áp dụng
        </Button>
      </div>
    </div>
  );
}