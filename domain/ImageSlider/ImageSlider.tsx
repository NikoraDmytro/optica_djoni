import React, { useState, useEffect } from "react";

import { SideText } from "./components/SideText";
import { Switchers } from "./components/Switchers";
import { SliderImage, IMAGE_WIDTH } from "./components/SliderImage";

import imageUrls from "./imageUrls.json";

import styles from "./ImageSlider.module.scss";

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const total = imageUrls.length;
  const translateValue = -IMAGE_WIDTH * current;

  const changeCurrent = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((current + 1) % total);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [current, total]);

  return (
    <>
      <SideText />
      <div
        className={styles.slider}
        style={{
          transform: `translateX(calc(${translateValue}px + 40%))`,
        }}
      >
        {imageUrls.map((url, index) => (
          <SliderImage
            key={url}
            url={url}
            isCurrent={index === current}
          />
        ))}
      </div>
      <Switchers current={current} changeCurrent={changeCurrent} />
    </>
  );
};
