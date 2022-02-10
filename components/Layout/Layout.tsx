import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

import { Header } from "./components/Heder";
import { Footer } from "./components/Footer";

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

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};
