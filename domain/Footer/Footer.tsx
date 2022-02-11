import Image from "next/image";

import { NavBar } from "../NavBar";
import {
  CompanyContacts,
  CompanyLocation,
  CompanyWorkingHours,
} from "../../components/CompanyInfo";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/image/logo.png"
        alt="Logo"
        width={180}
        height={80}
        layout="fixed"
      />

      <div className={styles.footerContent}>
        <div className={styles.footerInfoBlock}>
          <NavBar orientation="vertical" />
        </div>

        <div className={styles.footerInfoBlock}>
          <div>
            <CompanyLocation />
          </div>

          <div>
            <strong className={styles.strongBlock}>Как работаем?</strong>
            <CompanyWorkingHours />
          </div>
        </div>

        <div className={styles.footerInfoBlock}>
          <div>
            <CompanyContacts />
          </div>

          <div className={styles.companySocialMedia}>
            <strong className={styles.strongBlock}>
              Мы в социальных сетях:
            </strong>

            <div className={styles.icons}>
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />

              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
