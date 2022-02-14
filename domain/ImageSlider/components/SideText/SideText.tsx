import Image from "next/image";

import styles from "./SideText.module.scss";

export const SideText = () => {
  return (
    <div className={styles.sideText}>
      <h1 className={styles.facilitiesTitle}>Оптика Джони</h1>
      
      <ul className={styles.facilitiesList}>
        <li key={1}>
          <Image src="/icons/tic.svg" alt="" width={24} height={24} />
          Офтальмология для взрослых
        </li>

        <li key={2}>
          <Image src="/icons/tic.svg" alt="" width={24} height={24} />
          Детская офтальмология
        </li>

        <li key={3}>
          <Image src="/icons/tic.svg" alt="" width={24} height={24} />
          Кабинет аппаратного лечения
        </li>

        <li key={4}>
          <Image src="/icons/tic.svg" alt="" width={24} height={24} />
          Магазин оптики
        </li>

        <li key={5}>
          <Image src="/icons/tic.svg" alt="" width={24} height={24} />
          Мастерская
        </li>
      </ul>
    </div>
  );
};
