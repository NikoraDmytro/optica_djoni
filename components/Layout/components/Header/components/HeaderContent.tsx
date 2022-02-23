import Image from "next/image";

import {
  CompanyContacts,
  CompanyLocation,
  CompanyWorkingHours,
} from "../../CompanyInfo";

import { NavBar } from "../../NavBar";

import { PageName } from "../../../../../shared/types/Types";

import styles from "./HeaderContent.module.scss";
import classNames from "classnames";

interface Props {
  visible: boolean;
  currentPage: PageName;
  toggleVisibility: () => void;
}

export const HeaderContent = (props: Props) => {
  const { currentPage, visible, toggleVisibility } = props;

  const className = classNames(visible ? [styles.visible] : [styles.hidden], {
    [styles.headerContent]: true,
  });

  return (
    <div className={className}>
      <div className={styles.companyInfoContainer}>
        <div className={styles.locationContainer}>
          <CompanyLocation />
        </div>

        <div className={styles.workingHoursContainer}>
          <CompanyWorkingHours />
        </div>

        <div className={styles.contactsContainer}>
          <CompanyContacts />
        </div>
      </div>

      <div className={styles.headerNavBar}>
        <NavBar orientation="vertical" currentPage={currentPage} />
      </div>

      <div className={styles.selectContainer}>
        <strong className={styles.strongBlock}>Язык сайта</strong>

        <select id="language" className={styles.selectInput}>
          <option id="language">Русский</option>
          <option id="language">English</option>
        </select>

        {visible && (
          <button className={styles.closeMenu} onClick={toggleVisibility}>
            <Image src="/icons/close.svg" alt="Close" layout="fill" />
          </button>
        )}
      </div>
    </div>
  );
};
