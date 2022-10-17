import { ReactNode } from "react";
import styles from "../styles/Layout.module.css";
import { Player } from "./player/player";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.Root}>
      <div className={styles.SideBar}>
      <AnimatePresence exitBeforeEnter><Sidebar /></AnimatePresence>
      </div>
      <main className={styles.MainView}>
        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      </main>
      <footer className={styles.playerFooter}>
        <Player />
      </footer>
    </div>
  );
};

export default Layout;
