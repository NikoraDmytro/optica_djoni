import { ReactNode } from "react";
import Head from "next/head";

import {Header } from "../../domain/Header";
import {Footer} from "../../domain/Footer";

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
