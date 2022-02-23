import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";

import { PageName } from "../../../../shared/types/Types";

import { HeaderContent } from "./components/HeaderContent";
import { useState } from "react";

export const Header = ({ currentPage }: { currentPage: PageName }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.headerLogo}>
          <Image src="/image/logo.svg" alt="Logo" layout="fill" />
        </a>
      </Link>

      {!visible && (
        <button onClick={toggleVisibility} className={styles.headerMenu}>
          <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} />
        </button>
      )}

      <HeaderContent
        visible={visible}
        currentPage={currentPage}
        toggleVisibility={toggleVisibility}
      />
    </header>
  );
};
