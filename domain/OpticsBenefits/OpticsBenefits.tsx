import Image from "next/image";

import styles from "./OpticsBenefits.module.scss";

export const OpticsBenefits = () => {
  return (
    <div className={styles.container_blue}>
      <ul className={styles.benefitsList}>
        <li className={styles.benefitBlock}>
          <Image
            src="/icons/doctor.svg"
            alt="doctor"
            width={120}
            height={120}
          />

          <p>
            Cотрудники с медицинским образованием помогут вам в любых вопросах.
          </p>
        </li>

        <li className={styles.benefitBlock}>
          <Image
            src="/icons/card.svg"
            alt="doctor"
            width={120}
            height={120}
          />

          <p>Работает программа лояльности для постоянных клиентов.</p>
        </li>

        <li className={styles.benefitBlock}>
          <Image
            src="/icons/cycle.svg"
            alt="doctor"
            width={120}
            height={120}
          />

          <p>Постоянное обновление ассортимента</p>
        </li>
      </ul>
    </div>
  );
};
