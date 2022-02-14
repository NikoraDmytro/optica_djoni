import React, { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";

import imageUrls from "./imageUrls.json";

import styles from "./ImageSlider.module.scss";

const IMAGE_WIDTH = 914;
const IMAGE_HEIGHT = 625;

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const total = imageUrls.length;
  const translateValue = -IMAGE_WIDTH * (current - 0.6);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((current + 1) % total);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [current, total]);

  const renderSliderImage = (url: string, index: number) => {
    const name = url.replace(/.+\//, "").replace(/\.\w+$/, "");

    return (
      <div
        className={classNames({
          [styles.imageContainer]: true,
          [styles.currentImage]: index === current,
        })}
      >
        <Image src={url} alt={name} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
      </div>
    );
  };

  return (
    <div
      className={styles.slider}
      style={{ transform: `translateX(${translateValue}px)` }}
    >
      {imageUrls.map(renderSliderImage)}
    </div>
  );
};
