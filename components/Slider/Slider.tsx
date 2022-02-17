import React, { useState, useEffect } from "react";

import { Switchers } from "./components/Switchers";

import styles from "./Slider.module.scss";

import { SliderProps } from "../../shared/types/Props";
import classNames from "classnames";

export const Slider = (props: SliderProps) => {
  const [current, setCurrent] = useState(2);
  const { children, width, height, margin } = props;

  const length = children.length;
  const sliderContent = [
    children[length - 2],
    children[length - 1],
    ...children,
    children[0],
  ];
  const lastIndex = sliderContent.length - 2;

  const initialTranslate = width * 0.6;
  const translateValue = -(width + margin) * current;

  useEffect(() => {
    const onStart = () => {
      setCurrent(1);
      
      setTimeout(() => {
        setCurrent(2);
      });
    };

    const next = () => {
      setCurrent(current + 1);
    };

    const timeout = setTimeout(() => {
      current === lastIndex ? onStart() : next();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [current, lastIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} style={{ maxWidth: width * 2 }}>
        <div
          style={{
            transform: `translateX(${translateValue + initialTranslate}px)`,
          }}
          className={classNames({
            [styles.sliderContent]: true,
            [styles.noTransition]: current === 1,
          })}
        >
          {sliderContent.map((item, index) => (
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
        width={width}
        initialTranslate={initialTranslate}
        changeCurrent={(index) => setCurrent(index)}
      />
    </div>
  );
};
