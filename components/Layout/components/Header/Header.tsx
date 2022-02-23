import Link from "next/link";
import Image from "next/image";

import {
  CompanyContacts,
  CompanyLocation,
  CompanyWorkingHours,
} from "../CompanyInfo";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.headerLogo}>
          <Image src="/image/logo.svg" alt="Logo" layout="fill" />
        </a>
      </Link>

      <button className={styles.headerMenu}>
        <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} />
      </button>

      <div className={styles.headerContent}>
        <div className={styles.locationContainer}>
          <CompanyLocation />
        </div>

        <div className={styles.workingHoursContainer}>
          <CompanyWorkingHours />
        </div>

        <div className={styles.contactsContainer}>
          <CompanyContacts />
        </div>

        <div className={styles.selectContainer}>
          <strong className={styles.strongBlock}>Язык сайта</strong>

          <select id="language" className={styles.selectInput}>
            <option id="language">Русский</option>
            <option id="language">English</option>
          </select>
        </div>
      </div>
    </header>
  );
};
