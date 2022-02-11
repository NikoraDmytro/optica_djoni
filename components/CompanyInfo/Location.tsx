import Image from "next/image";

import styles from "./CompanyInfo.module.scss";

export const CompanyLocation = () => {
  return (
    <div className={styles.location}>
      <strong>Где находимся?</strong>

      <div className={styles.address}>
        <Image src="/icons/location.svg" alt="" width={18} height={18} />
        <p>Харьков, пр. Героев Сталинграда, 140</p>
      </div>
    </div>
  );
};
