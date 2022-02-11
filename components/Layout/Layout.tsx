import { ReactNode } from "react";
import Head from "next/head";

import styles from "./Layout.module.scss";

import { Footer } from "../../domain/Footer";
import { Header } from "../../domain/Header";
import { NavBar } from "../../domain/NavBar";
import { AskQuestion } from "../../domain/AskQuestion";

interface Props {
  children: ReactNode;
}

export const Layout = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Optica Djoni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.navBarContainer}>
        <NavBar orientation="horizontal" />
      </div>

      <main className={styles.mainContent}>
        {props.children}
        <AskQuestion />
      </main>

      <Footer />
    </div>
  );
};
