import Image from "next/image";
import classNames from "classnames";

import styles from "./DeviceBlock.module.scss";

interface Props {
  image: StaticImageData;
  name: string;
  description: string;
  rightImage?: boolean;
}

export const DeviceBlock = ({
  image,
  name,
  description,
  rightImage,
}: Props) => {
  const className = classNames({
    [styles.deviceBlock]: true,
    [styles.right]: rightImage,
  });

  return (
    <div className={className}>
      <div className={styles.deviceImage}>
        <Image
          alt=""
          src={image.src}
          width={image.width}
          height={image.height}
          layout="responsive"
        />
      </div>

      <div>
        <h2 className={styles.subTitle}>{name}</h2>

        <p className={styles.deviceDescription}>{description}</p>
      </div>
    </div>
  );
};
