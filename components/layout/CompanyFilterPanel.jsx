import { useState } from "react";
import { Search, Users, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { companyList } from "@/data/headerFilterData";
import styles from "@/styles/modules/Dashboard.module.css";

const iconMap = {
  Users,
  Building2,
};

export default function CompanyFilterPanel({ onSelect }) {
  const [keyword, setKeyword] = useState("");

  const filtered = companyList.filter((c) =>
    c.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className={styles.filterPanel}>
      <div className="relative mb-2">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          autoFocus
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Tìm Công ty/HTX..."
          className="h-8 pl-8 text-xs"
        />
      </div>

      <div className={styles.companyList}>
        {filtered.length === 0 && (
          <div className="text-xs text-muted-foreground px-2 py-3 text-center">
            Không tìm thấy kết quả phù hợp.
          </div>
        )}
        {filtered.map((company) => {
          const Icon = iconMap[
            company.type === "cong-ty" ? "Building2" : "Users"
          ];
          return (
            <button
              key={company.id}
              className={styles.companyItem}
              onClick={() => onSelect?.(company)}
            >
              <Icon size={15} className={styles.companyItemIcon} />
              <div className={styles.companyItemText}>
                <span className={styles.companyItemName}>{company.name}</span>
                <span className={styles.companyItemProvince}>{company.province}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}