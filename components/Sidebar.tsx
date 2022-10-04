import { useTheme as useNextTheme } from "next-themes";

import { Switch, useTheme } from "@nextui-org/react";
import styles from "../styles/SideBar.module.css";

const SideBar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div className={`${styles.sideBarMain}}`}>
      SIDEBAR
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
};

export default SideBar;
