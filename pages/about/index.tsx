import type { NextPage } from "next";

import styles from "../../styles/Home.module.css";

import { useRouter } from "next/router";
import { PageHeader } from "../../components/navigation/PageHeader";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <PageHeader text="Albums"></PageHeader>

      <main className={styles.main}>README</main>
    </div>
  );
};

export default About;
