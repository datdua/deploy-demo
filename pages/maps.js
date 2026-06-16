import { useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import LayerPanel from "@/components/layout/LayerPanel";
import MapView from "@/components/map/MapView";
import styles from "@/styles/modules/Dashboard.module.css";

export default function Maps() {
  const [showSearchPanel, setShowSearchPanel] = useState(false);

  return (
    <>
      <Head>
        <title>Bản Đồ - Demo Bản Đồ Số</title>
        <meta name="description" content="Trang bản đồ quản lý dữ liệu nông nghiệp" />
      </Head>
      <div className={styles.appShell}>
        <Header
          isSearchPanelOpen={showSearchPanel}
          onToggleSearchPanel={() => setShowSearchPanel((prev) => !prev)}
        />
        <div className={styles.body}>
          <LayerPanel />
          <MapView
            showSearchPanel={showSearchPanel}
            onCloseSearchPanel={() => setShowSearchPanel(false)}
          />
        </div>
      </div>
    </>
  );
}
