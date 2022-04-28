import { ReactNode } from "react";
import Head from "next/head";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { AskQuestion } from "./components/AskQuestion";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Head>
        <title>Optica Djoni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {props.children}
        <AskQuestion />
      </main>

      <Footer />
    </div>
  );
};
