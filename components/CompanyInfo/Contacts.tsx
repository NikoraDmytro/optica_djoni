import Image from "next/image";

import styles from "./CompanyInfo.module.scss";

export const CompanyContacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contactsTitle}>
        <Image src="/icons/phone.svg" alt="" width={18} height={18} />
        <strong className={styles.strongBlock}>Запись по телефону</strong>
      </div>

      <span>+ 380 63 604 38 01</span>
    </div>
  );
};
