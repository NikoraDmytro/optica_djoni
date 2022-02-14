import Image from "next/image";

import {
  CompanyContacts,
  CompanyLocation,
  CompanyWorkingHours,
} from "../../../../components/CompanyInfo";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/image/logo.svg"
        alt="Logo"
        width={180}
        height={80}
        layout="fixed"
      />

      <div className={styles.location}>
        <CompanyLocation />
      </div>

      <div className={styles.workingHours}>
        <CompanyWorkingHours />
      </div>

      <div className={styles.contacts}>
        <CompanyContacts />
      </div>

      <div>
        <strong className={styles.strongBlock}>Язык сайта</strong>

        <select id="language" className={styles.selectInput}>
          <option id="language">Русский</option>
          <option id="language">English</option>
        </select>
      </div>
    </header>
  );
};
