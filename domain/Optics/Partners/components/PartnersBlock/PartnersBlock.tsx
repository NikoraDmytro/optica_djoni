import Image from "next/image";
import classNames from "classnames";

import styles from "./PartnersBlock.module.scss";

import { getImageName } from "../../../../../utils/getImageName";

interface Props {
  text: string;
  title?: string;
  icons: StaticImageData[];
}

export const PartnersBlock = ({ title, text, icons }: Props) => {
  return (
    <div className={styles.partnersBlockContainer}>
      <h1 className={styles.title}>{title || null}</h1>

      <p className={classNames({ [styles.small]: title })}>{text}</p>

      <div className={styles.partnersBrandIcons}>
        {icons.map((icon) => {
          const name = getImageName(icon.src);

          return (
            <Image
              src={icon}
              key={name}
              alt={name}
              width={icon.width}
              height={icon.height}
            />
          );
        })}
      </div>
    </div>
  );
};
