import { Badge, Text } from '@nextui-org/react';
import { AnimatePresence } from 'framer-motion';
import { useTheme as useNextTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiDisc, FiGithub, FiHeart, FiHome, FiList, FiMoon, FiSun, FiUser } from 'react-icons/fi';
import { useFav } from './../../context/favoritesContext';
import MotionHoc from './../common/MotionHoc';
import Logo from './Logo';
import styles from './Sidebar.module.css';

const Sidebar = MotionHoc(() => {
  const { theme, setTheme } = useNextTheme();
  const router = useRouter();
  const { favNumber } = useFav();

  const SidebarItem = (props: any) => (
    <li className={router.asPath == props.url ? styles.active : ''}>
      <Link className={styles.link} href={props.url}>
        <a>
          <Text h3>
            {!props.favNumber ? (
              <span className={styles.icon}>{props.icon}</span>
            ) : (
              <Badge color="error" variant="flat" size="md" verticalOffset="20%" horizontalOffset="20%" content={props.favNumber} isInvisible={favNumber == 0}>
                <span className={styles.icon}>{props.icon}</span>
              </Badge>
            )}
            <span className={styles.text}>{props.title}</span>
          </Text>
        </a>
      </Link>
    </li>
  );

  const PreferencesItem = () => (
    <li>
      <Text h3 style={{ cursor: 'pointer' }}>
        <span className={styles.icon} onClick={(e: any) => setTheme(theme == 'light' ? 'dark' : 'light')}>
          {useNextTheme().theme == 'dark' ? <FiMoon color="cyan" /> : <FiSun color="orange" />}
        </span>
      </Text>
    </li>
  );

  return (
    <>
      <AnimatePresence mode="wait">
        <nav className={styles.navbar}>
          <div className={useNextTheme().theme == 'dark' ? styles.logodark : styles.logo}>
            <Logo />
          </div>

          <ul className={styles.group}>
            <SidebarItem title={'Home'} icon={<FiHome />} url={'/'}></SidebarItem>
            <SidebarItem title={'Favorites'} icon={<FiHeart />} url={'/favorites'} favNumber={favNumber}></SidebarItem>
          </ul>
          <ul className={styles.group}>
            <Text className={styles.header}>LIBRARY</Text>
            <SidebarItem title={'Albums'} icon={<FiDisc />} url={'/albums'}></SidebarItem>
            <SidebarItem title={'Playlists'} icon={<FiList />} url={'/playlists'}></SidebarItem>
            <SidebarItem title={'Artists'} icon={<FiUser />} url={'/artists'}></SidebarItem>
            <SidebarItem title={'Songs'} icon={<FiHome />} url={'/songs'}></SidebarItem>
          </ul>
          <ul className={styles.group}>
            <Text className={styles.header}>PREFERENCES</Text>
            <SidebarItem title={'About'} icon={<FiGithub />} url={'/about'}></SidebarItem>
            <PreferencesItem />
          </ul>
        </nav>
      </AnimatePresence>
    </>
  );
});

export default Sidebar;
