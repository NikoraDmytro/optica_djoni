import { ReactNode, useEffect, useState } from "react";
import Head from "next/head";

import styles from "./Layout.module.scss";

import { LayoutProps } from "../../shared/types/Props";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { AskQuestion } from "./components/AskQuestion";
import { useContainerWidth } from "../../utils/useContainerSize";

export const Layout = (props: LayoutProps) => {
  const { containerWidth, containerRef } = useContainerWidth(0);

  return (
    <div ref={containerRef}>
      <Head>
        <title>Optica Djoni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header currentPage={props.page} />

      <div className={styles.navBarContainer}>
        <NavBar
          currentPage={props.page}
          orientation={containerWidth > 1000 ? "horizontal" : "vertical"}
        />
      </div>

      <main>
        {props.children}
        <AskQuestion />
      </main>

      <Footer page={props.page} />
    </div>
  );
};
