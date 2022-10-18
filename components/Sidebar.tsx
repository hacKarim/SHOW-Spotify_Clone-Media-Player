import { useTheme as useNextTheme } from "next-themes";

import { Badge, Switch, Text } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FiDisc,
  FiGithub,
  FiHeart,
  FiHome,
  FiList,
  FiMoon,
  FiMusic,
  FiSun,
  FiUser,
} from "react-icons/fi";
import styles from "../styles/Sidebar.module.css";
import MotionHoc from "./common/MotionHoc";
import Logo from "./navigation/Logo";
import { useFav } from "../context/favoritesContext";

const Sidebar = MotionHoc(() => {
  const { theme, setTheme } = useNextTheme();
  const router = useRouter();
  const { fav, favNumber } = useFav();

  return (
    <>
      <AnimatePresence mode="wait">
        <nav className={styles.navbar}>
          <div
            className={
              useNextTheme().theme == "dark" ? styles.logodark : styles.logo
            }
          >
            <Logo />
          </div>

          <ul className={styles.navbar__group}>
            <li className={router.asPath == "/" ? styles.active : ""}>
              <Link className={styles.navbar__link} href={"/"}>
                <a>
                  <Text h3>
                    <span className={styles.navbar__icon}>
                      <FiHome />
                    </span>
                    <span className={styles.navbar__text}>Home</span>
                  </Text>
                </a>
              </Link>
            </li>
            <li className={router.asPath == "/favorites" ? styles.active : ""}>
              <Link className={styles.navbar__link} href={"/favorites"}>
                <a>
                  <Text h3>
                    <Badge
                      color="error"
                      variant="flat"
                      size="md"
                      verticalOffset="20%"
                      horizontalOffset="20%"
                      content={favNumber}
                      isInvisible={favNumber == 0}
                    >
                      <span className={styles.navbar__icon}>
                        <FiHeart />
                      </span>
                    </Badge>

                    <span className={styles.navbar__text}>Favorites</span>
                  </Text>
                </a>
              </Link>
            </li>
          </ul>
          <ul className={styles.navbar__group}>
            <Text className={styles.navbar__group__header}>LIBRARY</Text>
            <li className={router.asPath == "/albums" ? styles.active : ""}>
              <Link className={styles.navbar__link} href={"/albums"}>
                <a>
                  <Text h3>
                    <span className={styles.navbar__icon}>
                      <FiDisc />
                    </span>
                    <span className={styles.navbar__text}>Albums</span>
                  </Text>{" "}
                </a>
              </Link>
            </li>
            <li className={router.asPath == "/playlists" ? styles.active : ""}>
              <Link className={styles.navbar__link} href={"/playlists"}>
                <a>
                  <Text h3>
                    <span className={styles.navbar__icon}>
                      <FiList />
                    </span>
                    <span className={styles.navbar__text}>Playlists</span>
                  </Text>{" "}
                </a>
              </Link>
            </li>
            <li className={router.asPath == "/artists" ? styles.active : ""}>
              <Link className={styles.navbar__link} href={"/artists"}>
                <a>
                  <Text h3>
                    <span className={styles.navbar__icon}>
                      <FiUser />
                    </span>
                    <span className={styles.navbar__text}>Artists</span>
                  </Text>{" "}
                </a>
              </Link>
            </li>
            <li className={router.asPath == "/songs" ? styles.active : ""}>
              <Link className={styles.navbar__link} href={"/songs"}>
                <a>
                  <Text h3>
                    <span className={styles.navbar__icon}>
                      <FiMusic />
                    </span>
                    <span className={styles.navbar__text}>Songs</span>
                  </Text>{" "}
                </a>
              </Link>
            </li>
          </ul>
          <ul className={styles.navbar__group}>
            <Text className={styles.navbar__group__header}>PREFERENCES</Text>
            <li>
              <Text h3 style={{ cursor: "pointer" }}>
                <span
                  className={styles.navbar__icon}
                  onClick={(e: any) =>
                    setTheme(theme == "light" ? "dark" : "light")
                  }
                >
                  {useNextTheme().theme == "dark" ? (
                    <FiMoon />
                  ) : (
                    <FiSun color="orange" />
                  )}
                </span>
                <Switch
                  size={"md"}
                  iconOff={
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <g fill={"black"}>
                        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
                      </g>
                    </svg>
                  }
                  iconOn={
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <path
                        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                        fill={"white"}
                      />
                    </svg>
                  }
                  checked={useNextTheme().theme == "dark" ? true : false}
                  className={styles.navar__themeswitch}
                  onChange={(e: any) =>
                    setTheme(e.target.checked ? "dark" : "light")
                  }
                />
              </Text>
            </li>
            <li className={router.asPath == "/about" ? styles.active : ""}>
              <Link className={styles.navbar__link} href={"/about"}>
                <a>
                  <Text h3>
                    <span className={styles.navbar__icon}>
                      <FiGithub />
                    </span>
                    <span className={styles.navbar__text}>About</span>
                  </Text>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </AnimatePresence>
    </>
  );
});

export default Sidebar;
