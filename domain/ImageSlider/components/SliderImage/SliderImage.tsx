import Image from "next/image";
import classNames from "classnames";

import styles from "./SliderImage.module.scss";

export const IMAGE_WIDTH = 914;
export const IMAGE_HEIGHT = 625;

interface Props {
  url: string;
  isCurrent: boolean;
}

export const SliderImage = ({ url, isCurrent }: Props) => {
  const name = url.replace(/.+\//, "").replace(/\.\w+$/, "");

  return (
    <div
      className={classNames({
        [styles.imageContainer]: true,
        [styles.currentImage]: isCurrent,
      })}
    >
      <Image src={url} alt={name} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
    </div>
  );
};
