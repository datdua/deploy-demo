import Head from "next/head";
import Header from "@/components/layout/Header";
import LayerPanel from "@/components/layout/LayerPanel";
import MapView from "@/components/map/MapView";
import styles from "@/styles/modules/Dashboard.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bản đồ quản lý nông nghiệp - Demo</title>
        <meta name="description" content="Giao diện demo bản đồ quản lý dữ liệu nông nghiệp" />
      </Head>
      <div className={styles.appShell}>
        <Header />
        <div className={styles.body}>
          <LayerPanel />
          <MapView />
        </div>
      </div>
    </>
  );
}
