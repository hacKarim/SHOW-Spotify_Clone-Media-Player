import { useTheme as useNextTheme } from "next-themes";

import { Switch, useTheme } from "@nextui-org/react";
import styles from "../styles/SideBar.module.css";
import Link from "next/link";

const SideBar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div className={`${styles.sideBarMain}}`}>
      <div>SIDEBAR</div>
      <Link href={"/"}>Home</Link>
      <Link href={"/favorites"}>Favorites</Link>
      <Link href={"/albums"}>Albums</Link>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
};

export default SideBar;
