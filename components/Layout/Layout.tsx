import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

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
      <NavBar orientation="horizontal" />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};
