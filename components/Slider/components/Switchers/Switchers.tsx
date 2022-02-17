import classNames from "classnames";

import styles from "./Switchers.module.scss";

interface Props {
  width: number;
  current: number;
  initialTranslate: number;
  changeCurrent: (index: number) => void;
}

export const Switchers = (props: Props) => {
  const { current, width, initialTranslate, changeCurrent } = props;

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

  return (
    <ul
      className={styles.switchersList}
      style={{ width: width, transform: `translateX(${initialTranslate}px)` }}
    >
      {renderSwitcher(2)}
      {renderSwitcher(3)}
      {renderSwitcher(4)}
      {renderSwitcher(5)}
      {renderSwitcher(6)}
    </ul>
  );
};
