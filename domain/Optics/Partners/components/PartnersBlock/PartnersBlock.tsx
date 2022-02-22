import Image from "next/image";
import classNames from "classnames";

import styles from "./PartnersBlock.module.scss";

import { getImageName } from "../../../../../utils/getImageName";

interface Props {
  id?: string;
  text: string;
  title?: string;
  icons: StaticImageData[];
}

export const PartnersBlock = ({ title, text, icons, id }: Props) => {
  return (
    <div className={styles.partnersBlockContainer} id={id}>
      {title && <h1 className={styles.title}>{title}</h1>}

      <p
        className={classNames({
          [styles.subTitle]: true,
          [styles.small]: title,
        })}
      >
        {text}
      </p>

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
