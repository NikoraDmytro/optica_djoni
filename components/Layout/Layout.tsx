import { ReactNode } from "react";
import Head from "next/head";

import styles from "./Layout.module.scss";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { ImageSlider } from "./components/ImageSlider";
import { AskQuestion } from "./components/AskQuestion";

interface Props {
  home?: boolean;
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

      {props.home && <ImageSlider />}

      <main className={styles.mainContent}>
        {props.children}
        <AskQuestion />
      </main>

      <Footer />
    </div>
  );
};
