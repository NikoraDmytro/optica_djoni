import classNames from "classnames";

import { IMAGE_WIDTH } from "../SliderImage";

import styles from "./Switchers.module.scss";

interface Props {
  changeCurrent: (index: number) => void;
  current: number;
}

export const Switchers = ({ changeCurrent, current }: Props) => {
  const renderSwitcher = (index: number) => (
    <li
      key={index}
      onClick={() => changeCurrent(index)}
      className={classNames({
        [styles.switcher]: true,
        [styles.active]: current === index,
      })}
    />
  );

  return (
    <ul className={styles.switchersList}>
      {renderSwitcher(0)}
      {renderSwitcher(1)}
      {renderSwitcher(2)}
      {renderSwitcher(3)}
      {renderSwitcher(4)}
    </ul>
  );
};
