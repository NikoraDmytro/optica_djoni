import React from "react";
import classNames from "classnames";

import { Switchers } from "./components/Switchers";

import styles from "./Slider.module.scss";

import { useCarousel } from "./utils/useCarousel";

import { SliderProps } from "../../shared/types/Props";
import { useContainerWidth } from "../../utils/useContainerSize";

export const Slider = (props: SliderProps) => {
  const { children, width, height, margin } = props;

  const { containerWidth, containerRef } = useContainerWidth(width);
  const { current, loopedList, firstIndex, lastIndex, changeCurrent } =
    useCarousel(children);

  const disableTransition = current < firstIndex || current > lastIndex;

  const initialTranslate = (containerWidth - width) * 0.85;
  const translateValue = -(width + margin) * current;

  return (
    <div
      ref={containerRef}
      className={styles.sliderContainer}
      style={{ maxWidth: width * 2 }}
    >
      <div className={styles.slider}>
        <div
          style={{
            transform: `translateX(${translateValue}px)`,
            marginLeft: `${initialTranslate}px`,
          }}
          className={classNames({
            [styles.sliderContent]: true,
            [styles.noTransition]: disableTransition,
          })}
        >
          {loopedList.map((item, index) => (
            <div
              key={index}
              style={{ width: width, height: height, marginRight: margin }}
              className={classNames({
                [styles.sliderItem]: true,
                [styles.current]: index === current,
              })}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <Switchers
        current={current}
        lastIndex={lastIndex}
        firstIndex={firstIndex}
        changeCurrent={changeCurrent}
        style={{
          width: width,
          transform: `translateX(${initialTranslate}px)`,
        }}
      />
    </div>
  );
};
