import Image from "next/image";
import classNames from "classnames";

import styles from "./SliderImage.module.scss";
import { getImageName } from "../../../../utils/getImageName";

export const IMAGE_WIDTH = 914;
export const IMAGE_HEIGHT = 625;

interface Props {
  url: string;
  isCurrent: boolean;
}

export const SliderImage = ({ url, isCurrent }: Props) => {
  return (
    <div
      className={classNames({
        [styles.imageContainer]: true,
        [styles.currentImage]: isCurrent,
      })}
    >
      <Image
        src={url}
        alt={getImageName(url)}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
      />
    </div>
  );
};
