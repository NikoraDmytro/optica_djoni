import { ReactNode } from "react";
import Head from "next/head";

import styles from "./Layout.module.scss";

import { LayoutProps } from "../../shared/types/Props";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { AskQuestion } from "./components/AskQuestion";

export const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Optica Djoni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header currentPage={props.page} />

      <div className={styles.navBarContainer}>
        <NavBar currentPage={props.page} orientation="horizontal" />
      </div>

      <main>
        {props.children}
        <AskQuestion />
      </main>

      <Footer page={props.page} />
    </div>
  );
};
