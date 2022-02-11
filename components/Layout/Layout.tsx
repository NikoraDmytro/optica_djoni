import { ReactNode } from "react";
import Head from "next/head";

import styles from "./Layout.module.scss";

import { Footer } from "../../domain/Footer";
import { Header } from "../../domain/Header";
import { NavBar } from "../../domain/NavBar";

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

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};
