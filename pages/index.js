import { useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import LayerPanel from "@/components/layout/LayerPanel";
import MapView from "@/components/map/MapView";
import DataTablePanel from "@/components/layout/DataTablePanel";
import styles from "@/styles/modules/Dashboard.module.css";

export default function Home() {
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [showDataTable, setShowDataTable] = useState(false);

  return (
    <>
      <Head>
        <title>Demo Bản Đồ Số</title>
        <meta name="description" content="Giao diện demo bản đồ quản lý dữ liệu nông nghiệp" />
      </Head>
      <div className={styles.appShell}>
        <Header
          isSearchPanelOpen={showSearchPanel}
          onToggleSearchPanel={() => setShowSearchPanel((prev) => !prev)}
        />
        {/* <div className={styles.body}>
          <LayerPanel
            showDataTable={showDataTable}
            onToggleDataTable={() => setShowDataTable((prev) => !prev)}
          />
          <MapView
            showSearchPanel={showSearchPanel}
            onCloseSearchPanel={() => setShowSearchPanel(false)}
          />
          {showDataTable && (
            <DataTablePanel onClose={() => setShowDataTable(false)} />
          )}
        </div> */}
        <div className={styles.body}>
          <LayerPanel
            showDataTable={showDataTable}
            onToggleDataTable={() => setShowDataTable((prev) => !prev)}
          />
          <MapView
            showSearchPanel={showSearchPanel}
            onCloseSearchPanel={() => setShowSearchPanel(false)}
            showDataTable={showDataTable}
            onCloseDataTable={() => setShowDataTable(false)}
          />
        </div>
      </div>
    </>
  );
}