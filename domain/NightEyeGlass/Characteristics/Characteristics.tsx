import Image from "next/image";

import styles from "./Characteristics.module.scss";

export const NightEyeGlassCharacteristics = () => {
  const renderListItem = (text: string) => {
    return (
      <li key={text} className={styles.listItem}>
        <div className={styles.ticIcon}>
          <Image src="/icons/tic.svg" alt="" width={24} height={24} />
        </div>

        <p>{text}</p>
      </li>
    );
  };

  return (
    <div className={styles.container_white}>
      <h1 className={styles.title}>ХАРАКТЕРИСТИКИ</h1>

      <div className={styles.characteristics}>
        <p>
          Короткий период адаптации, не требуют влаги для поддержания своей
          формы, не сушат глаза.{" "}
        </p>

        <p>
          Гладкая поверхность и отсутствие воды в линзе обеспечивают пониженное
          накопление отложений из слезной пленки.
        </p>

        <div className={styles.eyeglassIcon}>
          <Image src="/icons/eyeglass.svg" alt="" layout="fill" />
        </div>

        <ul className={styles.characteristicsList}>
          {renderListItem("Коэффициент кислородопроницаемости Dk: 100, 125")}
          {renderListItem("Режим ношения: ночной")}
          {renderListItem("Срок замены: 1 год")}
        </ul>
      </div>
    </div>
  );
};
