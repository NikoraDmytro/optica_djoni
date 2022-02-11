import Image from "next/image";

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
        className={styles.footerLogo}
      />

      <div className={styles.footerContent}>
        <div className={styles.footerInfoBlock}>
          <div>
            <CompanyLocation />
          </div>

          <div>
            <strong className={styles.workingHoursTitle}>Как работаем?</strong>
            <CompanyWorkingHours />
          </div>
        </div>

        <div className={styles.footerInfoBlock}>
          <div>
            <CompanyContacts />
          </div>

          <div className={styles.companySocialMedia}>
            <strong>Мы в социальных сетях:</strong>

            <div className={styles.icons}>
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
                className={styles.icon}
              />

              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
