import { Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { PageHeader } from './../../components/navigation/PageHeader';
import styles from './../../styles/Page.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <PageHeader text="About"></PageHeader>
      <Text h3>Github:</Text>
      <Text blockquote>
        <Link href="https://github.com/Guelguin/Spotify-Clone-Media-Player">https://github.com/Guelguin/Spotify-Clone-Media-Player</Link>
      </Text>
      <Text h3>Stack:</Text>
      <Text blockquote>
        <Text h5>NextJS, NextUI, Apollo Client, React Icons, GraphQL, Lottie, Moment, Next Themes, LocalStorage, Framer Motion, TypeScript, React</Text>
      </Text>
    </div>
  );
};

export default About;
