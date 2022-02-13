import Image from "next/image";
import React, { useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./ImageSlider.module.scss";

const IMAGE_WIDTH = 914;
const IMAGE_HEIGHT = 625;

const IMAGE_URLS = [
  "/image/flowers_0.jpg",
  "/image/flowers_1.jpg",
  "/image/flowers_2.jpg",
  "/image/flowers_3.jpg",
  "/image/flowers_4.jpg",
];

const getImageClassName = (isActive: Boolean) => {
  return classNames({
    [styles.sliderData]: true,
    [styles.active]: isActive,
  });
};

const renderSliderImage = (url: string, isActive: boolean) => {
  const className = getImageClassName(isActive);
  const key = url.replace(/.+\//, "").replace(/\.\w+$/, "");

  return (
    <div key={key} className={className}>
      <Image src={url} alt={key} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
    </div>
  );
};

export const ImageSlider = () => {
  const [active, setActive] = useState(0);
  const imagesList: React.ReactNode[] = [];

  const total = IMAGE_URLS.length;
  const half = Math.floor(total / 2);
  const last = (active + half) % total;

  let i = last;

  do {
    i = (i + 1) % total;
    const isActive = i === active;
    const url = IMAGE_URLS[i];

    imagesList.push(renderSliderImage(url, isActive));
  } while (i !== last);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive((active + 1) % total);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div
      className={styles.slider}
      style={{ transform: `translateX(${-IMAGE_WIDTH * (half - 0.75)}px)` }}
    >
      {imagesList}
    </div>
  );
};
