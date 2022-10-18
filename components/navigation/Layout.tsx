import Head from "next/head";
import { ReactNode } from "react";
import styles from "./Layout.module.css";
import { Player } from "./../player/player";
import Sidebar from "./../navigation/Sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.Root}>
      <Head>
        <title>Shotgun Player</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.SideBar}>
        <Sidebar key="sidebar" />
      </div>
      <main className={styles.MainView}>{children}</main>
      <footer className={styles.playerFooter}>
        <Player />
      </footer>
    </div>
  );
};

export default Layout;
