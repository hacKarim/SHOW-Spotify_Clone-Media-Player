import { useTheme as useNextTheme } from "next-themes";

import { Switch, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <>
      <nav className={styles.navbar}>
        <Text ></Text>
        <Text
        className={styles.navbar__logo}
        css={{ textGradient: "45deg, $blue600 0%, $green600 70%" }}
      >
         //PLAY
      </Text>
        <ul className={styles.navbar__group}>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/"}>
                <>
                  <span className={styles.navbar__icon}>🏠</span>Home
                </>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/charts"}>
                <>
                  <span className={styles.navbar__icon}>💽</span>Charts
                </>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/favorites"}>
                <>
                  <span className={styles.navbar__icon}>❤️</span>Favorites
                </>
              </Link>
            </span>
          </li>
        </ul>
        <ul className={styles.navbar__group}>
          <p className={styles.navbar__group__header}>YOUR LIBRARY</p>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/playlists"}>
                <>
                  <span className={styles.navbar__icon}>📼</span>Playlists
                </>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/songs"}>
                <>
                  <span className={styles.navbar__icon}>🎵</span>Songs
                </>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/artists"}>
                <>
                  <span className={styles.navbar__icon}>🧑‍🎤</span>Artists
                </>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/albums"}>
                <>
                  <span className={styles.navbar__icon}>📀</span>Albums
                </>
              </Link>
            </span>
          </li>
        </ul>
        <ul className={styles.navbar__group}>
          <p className={styles.navbar__group__header}>PREFERENCES</p>
          <li>
            <span className={styles.navbar__item}>
              <span className={styles.navbar__icon}>🌙</span>
              <Switch
                size={"xs"}
                checked={isDark}
                className={styles.navar__themeswitch}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              />
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
