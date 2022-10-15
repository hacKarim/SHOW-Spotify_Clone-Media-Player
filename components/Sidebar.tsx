import { useTheme as useNextTheme } from "next-themes";

import { Switch, Text } from "@nextui-org/react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const { setTheme } = useNextTheme();

  return (
    <>
      <nav className={styles.navbar}>
        <Text></Text>
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
                <a>
                  {" "}
                  <span className={styles.navbar__icon}>🏠</span>Home
                </a>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/charts"}>
                <a>
                  <span className={styles.navbar__icon}>💽</span>Charts
                </a>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/favorites"}>
                <a>
                  <span className={styles.navbar__icon}>❤️</span>Favorites
                </a>
              </Link>
            </span>
          </li>
        </ul>
        <ul className={styles.navbar__group}>
          <Text
          className={styles.navbar__group__header}
          css={{ textGradient: "45deg, $blue600 0%, $green600 70%" }}
        >
          YOUR LIBRARY
        </Text>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/playlists"}>
                <a>
                  <span className={styles.navbar__icon}>📼</span>Playlists
                </a>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/songs"}>
                <a>
                  <span className={styles.navbar__icon}>🎵</span>Songs
                </a>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/artists"}>
                <a>
                  <span className={styles.navbar__icon}>🧑‍🎤</span>Artists
                </a>
              </Link>
            </span>
          </li>
          <li>
            <span className={styles.navbar__item}>
              <Link className={styles.navbar__link} href={"/albums"}>
                <a>
                  <span className={styles.navbar__icon}>📀</span>Albums
                </a>
              </Link>
            </span>
          </li>
        </ul>
        <ul className={styles.navbar__group}>
          <Text
          className={styles.navbar__group__header}
          css={{ textGradient: "45deg, $blue600 0%, $green600 70%" }}
        >
          PREFERENCES
        </Text>
          <li>
            <span className={styles.navbar__item}>
              <span className={styles.navbar__icon}>🌙</span>
              <Switch
                size={"xs"}
                checked={useNextTheme().theme == "dark" ? true : false}
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
