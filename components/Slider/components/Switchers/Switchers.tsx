import classNames from "classnames";
import { CSSProperties, ReactNode } from "react";

import styles from "./Switchers.module.scss";

interface Props {
  current: number;
  lastIndex: number;
  firstIndex: number;
  style: CSSProperties;
  changeCurrent: (index: number) => void;
}

export const Switchers = (props: Props) => {
  const { current, changeCurrent, firstIndex, lastIndex } = props;
  const switchers: ReactNode[] = [];

  const renderSwitcher = (index: number) => {
    const handleClick = () => {
      if (current !== index) {
        changeCurrent(index);
      }
    };

    return (
      <li
        key={index}
        onClick={handleClick}
        className={classNames({
          [styles.switcher]: true,
          [styles.active]: current === index,
        })}
      />
    );
  };

  for (let i = firstIndex; i <= lastIndex; i++) {
    switchers.push(renderSwitcher(i));
  }

  return (
    <ul className={styles.switchersList} style={props.style}>
      {switchers}
    </ul>
  );
};
