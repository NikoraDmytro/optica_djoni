import Image from "next/image";

import { BenefitsProps } from "../../shared/types/Props";

import { getImageName } from "../../utils/getImageName";

import styles from "./Benefits.module.scss";

export const Benefits = ({ benefits, blockTitle }: BenefitsProps) => {
  return (
    <div className={styles.container_blue}>
      {blockTitle && <h1 className={styles.title}>{blockTitle}</h1>}

      <ul className={styles.benefitsList}>
        {benefits.map((benefit) => (
          <li key={benefit.name} className={styles.benefitBlock}>
            <Image
              src={benefit.icon}
              alt={getImageName(benefit.icon.src)}
              width={120}
              height={120}
            />

            <h2 className={styles.benefitName}>{benefit.name}</h2>

            <p className={styles.benefitDescription}>
              {benefit.description || null}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
