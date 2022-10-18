import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import styles from "../../styles/Home.module.css";
import ReactMarkdown from "react-markdown";

import { useRouter } from "next/router";
import { PageHeader } from "../../components/navigation/PageHeader";

const About: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <PageHeader text="Albums"></PageHeader>

      <main className={styles.main}>README</main>
    </div>
  );
};

export default About;
