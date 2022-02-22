import Link from "next/link";
import Image from "next/image";

import { PageName } from "../../../../shared/types/Types";

import { NavBar } from "../NavBar";
import {
  CompanyContacts,
  CompanyLocation,
  CompanyWorkingHours,
} from "../CompanyInfo";

import styles from "./Footer.module.scss";

export const Footer = ({ page }: { page: PageName }) => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <Image
            src="/image/logo.svg"
            alt="Logo"
            width={180}
            height={80}
            layout="fixed"
          />
        </a>
      </Link>

      <div className={styles.footerContent}>
        <div className={styles.footerInfoBlock}>
          <NavBar currentPage={page} orientation="vertical" />
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
