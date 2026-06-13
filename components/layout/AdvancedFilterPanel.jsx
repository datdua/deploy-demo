import { useState } from "react";
import { Filter, X, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { layerGroups } from "@/data/mapData";
import {
    fieldDependencies,
    filterFieldsByLayer,
    defaultFilterFields,
} from "@/data/advancedFilterData";
import styles from "@/styles/modules/Dashboard.module.css";

// Gộp tất cả layer từ các group thành 1 danh sách phẳng để chọn trong "+ Thêm lớp dữ liệu"
const allLayers = layerGroups.flatMap((group) =>
    group.layers.map((layer) => ({
        ...layer,
        groupTitle: group.title,
    }))
);

function getLayerInfo(layerId) {
    return allLayers.find((l) => l.id === layerId);
}

function getFilterFields(layerId) {
    return filterFieldsByLayer[layerId] ?? defaultFilterFields;
}

// Tạo 1 "trường lọc" trống cho 1 lớp dữ liệu (mặc định chọn field đầu tiên)
function createEmptyFilterField(layerId, usedFieldIds = []) {
    const fields = getFilterFields(layerId);
    const firstAvailable = fields.find((f) => !usedFieldIds.includes(f.id));
    return {
        rowId: `${layerId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        fieldId: firstAvailable?.id ?? "",
        value: "",
    };
}

// Lấy giá trị hiện tại của 1 field (theo fieldId) trong danh sách filters của 1 layer
// Nếu field đó chưa được thêm vào filters (không có row nào dùng fieldId này),
// trả về "" -> coi như "chưa chọn".
function getFieldValue(filters, fieldId) {
    const row = filters.find((f) => f.fieldId === fieldId);
    return row?.value ?? "";
}

// Tính danh sách option được phép hiển thị cho 1 field, dựa trên
// fieldDependencies (rule dạng "rules": lọc theo giá trị field nguồn)
function getAllowedOptions(layerId, fieldId, fieldDef, filters) {
    const deps = fieldDependencies[layerId] ?? [];
    const rule = deps.find((d) => d.target === fieldId);

    if (!rule) return fieldDef?.options ?? [];

    // Pattern 1: 1 source + rules
    if (rule.source && rule.rules) {
        const sourceValue = getFieldValue(filters, rule.source);
        const allowedValues = rule.rules[sourceValue] ?? rule.rules[""] ?? null;
        if (!allowedValues) return fieldDef?.options ?? [];
        return (fieldDef?.options ?? []).filter((opt) =>
            allowedValues.includes(opt.value)
        );
    }

    // Pattern 2: multiSource + rules
    if (rule.multiSource && rule.rules) {
        const activeSource = rule.sources.find(
            (srcId) => getFieldValue(filters, srcId) !== ""
        );
        const resolvedValue = activeSource
            ? getFieldValue(filters, activeSource)
            : "";
        const allowedValues = rule.rules[resolvedValue] ?? rule.rules[""] ?? null;
        if (!allowedValues) return fieldDef?.options ?? [];

        // filterByGroup: so sánh opt.group thay vì opt.value
        if (rule.filterByGroup) {
            return (fieldDef?.options ?? []).filter((opt) =>
                allowedValues.includes(opt.group)
            );
        }
        return (fieldDef?.options ?? []).filter((opt) =>
            allowedValues.includes(opt.value)
        );
    }

    return fieldDef?.options ?? [];
}

// Kiểm tra field có bị khoá hoàn toàn (không cho chọn giá trị) không,
// dựa trên rule dạng "sources" + "allowedValues"
function isFieldLocked(layerId, fieldId, filters) {
  const deps = fieldDependencies[layerId] ?? [];
  const rule = deps.find((d) => d.target === fieldId && d.sources);

  // Rule multiSource dùng để lọc options, không dùng để lock field
  if (!rule || rule.multiSource) return false;

  return rule.sources.some((sourceFieldId) => {
    const sourceValue = getFieldValue(filters, sourceFieldId);
    const allowed = rule.allowedValues[sourceFieldId] ?? [""];
    return !allowed.includes(sourceValue);
  });
}

export default function AdvancedFilterPanel({ onClose }) {
    // selectedLayers: [{ layerId, filters: [{ rowId, fieldId, value }] }]
    const [selectedLayers, setSelectedLayers] = useState([]);
    const [layerToAdd, setLayerToAdd] = useState("");

    const availableLayers = allLayers.filter(
        (l) => !selectedLayers.some((sl) => sl.layerId === l.id)
    );

    const handleAddLayer = () => {
        if (!layerToAdd) return;
        setSelectedLayers((prev) => [
            ...prev,
            {
                layerId: layerToAdd,
                filters: [createEmptyFilterField(layerToAdd, [])],
            },
        ]);
        setLayerToAdd("");
    };

    const handleRemoveLayer = (layerId) => {
        setSelectedLayers((prev) => prev.filter((sl) => sl.layerId !== layerId));
    };

    const handleAddFilterField = (layerId) => {
        setSelectedLayers((prev) =>
            prev.map((sl) =>
                sl.layerId === layerId
                    ? {
                        ...sl,
                        filters: [
                            ...sl.filters,
                            createEmptyFilterField(
                                layerId,
                                sl.filters.map((f) => f.fieldId),
                            ),
                        ],
                    }
                    : sl
            )
        );
    };

    const handleRemoveFilterField = (layerId, rowId) => {
        setSelectedLayers((prev) =>
            prev.map((sl) =>
                sl.layerId === layerId
                    ? { ...sl, filters: sl.filters.filter((f) => f.rowId !== rowId) }
                    : sl
            )
        );
    };

    const handleFieldChange = (layerId, rowId, fieldId) => {
        setSelectedLayers((prev) =>
            prev.map((sl) =>
                sl.layerId === layerId
                    ? {
                        ...sl,
                        filters: sl.filters.map((f) =>
                            f.rowId === rowId ? { ...f, fieldId, value: "" } : f
                        ),
                    }
                    : sl
            )
        );
    };

    // Khi 1 field đổi giá trị, các field khác đang phụ thuộc vào nó (theo
    // fieldDependencies) có thể không còn hợp lệ với option/lock mới ->
    // reset giá trị của các field đó về "" để tránh giữ giá trị không hợp lệ.
    const handleValueChange = (layerId, rowId, value) => {
        setSelectedLayers((prev) =>
            prev.map((sl) => {
                if (sl.layerId !== layerId) return sl;

                const changedFilter = sl.filters.find((f) => f.rowId === rowId);
                const changedFieldId = changedFilter?.fieldId;
                const deps = fieldDependencies[layerId] ?? [];

                // Trước tiên cập nhật giá trị field đang đổi
                let nextFilters = sl.filters.map((f) =>
                    f.rowId === rowId ? { ...f, value } : f
                );

                // Tìm các field target phụ thuộc vào field vừa đổi -> reset value
                // nếu giá trị hiện tại không còn nằm trong danh sách option cho phép,
                // hoặc field bị khoá hoàn toàn sau khi đổi.
                deps.forEach((dep) => {
                    const dependsOnChanged =
                        dep.source === changedFieldId ||
                        (dep.sources && dep.sources.includes(changedFieldId));

                    if (!dependsOnChanged) return;

                    nextFilters = nextFilters.map((f) => {
                        if (f.fieldId !== dep.target) return f;

                        const fieldDef = getFilterFields(layerId).find(
                            (fd) => fd.id === f.fieldId
                        );

                        const locked = isFieldLocked(layerId, f.fieldId, nextFilters);
                        if (locked) {
                            return { ...f, value: "" };
                        }

                        const allowedOptions = getAllowedOptions(
                            layerId,
                            f.fieldId,
                            fieldDef,
                            nextFilters
                        );
                        const stillValid = allowedOptions.some(
                            (opt) => opt.value === f.value
                        );
                        return stillValid ? f : { ...f, value: "" };
                    });
                });

                return { ...sl, filters: nextFilters };
            })
        );
    };

    const handleClearAll = () => {
        setSelectedLayers([]);
        setLayerToAdd("");
    };

    const handleApply = () => {
        // Demo: chưa lọc dữ liệu thật trên bản đồ, chỉ log kết quả bộ lọc hiện tại
        console.log("Bộ lọc áp dụng:", selectedLayers);
        onClose?.();
    };

    return (
        <div className={styles.advFilterPanel}>
            <div className={styles.advFilterHeader}>
                <span className={styles.advFilterTitle}>Tìm kiếm nâng cao</span>
                <button
                    className={styles.advFilterLayerRemove}
                    onClick={onClose}
                    title="Đóng"
                >
                    <X size={16} />
                </button>
            </div>

            <div className={styles.advFilterBody}>
                {selectedLayers.length === 0 && (
                    <div className={styles.advFilterEmpty}>
                        <span className={styles.advFilterEmptyIcon}>
                            <Filter size={18} />
                        </span>
                        <span className={styles.advFilterEmptyText}>
                            Chưa có lớp dữ liệu nào được chọn
                        </span>
                        <span className={styles.advFilterEmptyHint}>
                            Chọn &quot;Thêm lớp dữ liệu&quot; bên dưới để bắt đầu
                        </span>
                    </div>
                )}

                {selectedLayers.map((sl) => {
                    const layerInfo = getLayerInfo(sl.layerId);
                    const fields = getFilterFields(sl.layerId);

                    return (
                        <div key={sl.layerId} className={styles.advFilterLayerCard}>
                            <div className={styles.advFilterLayerHeader}>
                                <span
                                    className={styles.advFilterLayerDot}
                                    style={{ backgroundColor: layerInfo?.color ?? "#94a3b8" }}
                                />
                                <span className={styles.advFilterLayerName}>
                                    {layerInfo?.label ?? sl.layerId}
                                </span>
                                <button
                                    className={styles.advFilterLayerRemove}
                                    onClick={() => handleRemoveLayer(sl.layerId)}
                                    title="Bỏ lớp dữ liệu này"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>

                            {sl.filters.map((filter) => {
                                const fieldDef = fields.find((f) => f.id === filter.fieldId);
                                const locked = isFieldLocked(sl.layerId, filter.fieldId, sl.filters);
                                const allowedOptions = getAllowedOptions(
                                    sl.layerId,
                                    filter.fieldId,
                                    fieldDef,
                                    sl.filters
                                );

                                return (
                                    <div key={filter.rowId} className={styles.advFilterFieldRow}>
                                        <div className={styles.advFilterFieldSelects}>
                                            {(() => {
                                                const usedByOthers = sl.filters
                                                    .filter((f) => f.rowId !== filter.rowId)
                                                    .map((f) => f.fieldId);
                                                const availableFields = fields.filter(
                                                    (f) => !usedByOthers.includes(f.id)
                                                );
                                                return (
                                                    <Select
                                                        value={filter.fieldId}
                                                        onChange={(e) =>
                                                            handleFieldChange(sl.layerId, filter.rowId, e.target.value)
                                                        }
                                                        className="h-8 text-xs"
                                                    >
                                                        {availableFields.map((f) => (
                                                            <option key={f.id} value={f.id}>
                                                                {f.label}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                );
                                            })()}
                                            <Select
                                                value={filter.value}
                                                onChange={(e) =>
                                                    handleValueChange(sl.layerId, filter.rowId, e.target.value)
                                                }
                                                className="h-8 text-xs"
                                                disabled={locked}
                                            >
                                                <option value="">
                                                    {locked ? "Không áp dụng" : "Chọn giá trị..."}
                                                </option>
                                                {!locked &&
                                                    allowedOptions.map((opt) => (
                                                        <option key={opt.value} value={opt.value}>
                                                            {opt.label}
                                                        </option>
                                                    ))}
                                            </Select>
                                        </div>

                                        {sl.filters.length > 1 && (
                                            <button
                                                className={styles.advFilterFieldRemove}
                                                onClick={() =>
                                                    handleRemoveFilterField(sl.layerId, filter.rowId)
                                                }
                                                title="Xoá trường lọc này"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                            {sl.filters.length < fields.length && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className={`${styles.advFilterAddFieldBtn} text-xs`}
                                    onClick={() => handleAddFilterField(sl.layerId)}
                                >
                                    <Plus size={13} className="mr-1" />
                                    Thêm trường lọc
                                </Button>
                            )}
                        </div>
                    );
                })}

                <div className={styles.advFilterAddLayerRow}>
                    <div className={styles.advFilterAddLayerSelect}>
                        <Select
                            value={layerToAdd}
                            onChange={(e) => setLayerToAdd(e.target.value)}
                            className="h-9 text-xs"
                            disabled={availableLayers.length === 0}
                        >
                            <option value="">
                                {availableLayers.length === 0
                                    ? "Đã thêm tất cả lớp dữ liệu"
                                    : "+ Thêm lớp dữ liệu"}
                            </option>
                            {availableLayers.map((layer) => (
                                <option key={layer.id} value={layer.id}>
                                    {layer.label} ({layer.groupTitle})
                                </option>
                            ))}
                        </Select>
                    </div>
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-xs whitespace-nowrap"
                        onClick={handleClearAll}
                    >
                        Xoá tất cả
                    </Button>
                </div>

                {layerToAdd && (
                    <Button size="sm" className="text-xs" onClick={handleAddLayer}>
                        <Plus size={13} className="mr-1" />
                        Thêm &quot;{getLayerInfo(layerToAdd)?.label}&quot; vào bộ lọc
                    </Button>
                )}
            </div>

            <div className={styles.advFilterFooter}>
                <Button className="w-full text-xs" onClick={handleApply}>
                    <Filter size={14} className="mr-1.5" />
                    Áp dụng bộ lọc
                </Button>
            </div>
        </div>
    );
}