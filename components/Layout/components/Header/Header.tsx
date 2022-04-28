import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./Header.module.scss";

import { NavBar } from "./../NavBar/NavBar";
import { HeaderContent } from "./components/HeaderContent";

export const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.headerLogo}>
          <Image src="/image/logo.svg" alt="Logo" width={182} height={80} />
        </a>
      </Link>

      <button onClick={toggleVisibility} className={styles.headerMenu}>
        <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} />
      </button>

      <HeaderContent visible={visible} toggleVisibility={toggleVisibility} />
    </header>
  );
};
