import { ReactNode, useEffect, useState } from "react";
import styles from "../styles/Layout.module.css";
import { Player } from "./player/player";
import SideBar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className={styles.SideBar}>
        <SideBar />
      </div>
      <main className={styles.MainView}>{children}</main>
      <footer className={styles.playerFooter}>
        <Player />
      </footer>
    </div>
  );
};

export default Layout;
