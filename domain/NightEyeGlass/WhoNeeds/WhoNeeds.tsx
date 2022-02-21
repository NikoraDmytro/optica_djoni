import Image from "next/image";

import styles from "./WhoNeeds.module.scss";

export const WhoNeedsNightEyeglass = () => {
  const renderListItem = (text: string) => {
    return (
      <li key={text} className={styles.personsListItem}>
        <div className={styles.ticIcon}>
          <Image src="/icons/tic.svg" alt="" width={24} height={24} />
        </div>

        <p className={styles.personDescription}>{text}</p>
      </li>
    );
  };

  return (
    <div className={styles.container_white}>
      <h1 className={styles.title}>Кто использует жёсткие ночные линзы?</h1>

      <ul className={styles.personsList}>
        {renderListItem(
          "Те, кто хочет ходить без очков и линз на протяжении дня."
        )}
        {renderListItem("Те, кто занимается активными видами спорта.")}
        {renderListItem(
          "Те, кто ждёт лазерной коррекции зрения и хочет понять, как оно будет после."
        )}
        {renderListItem(
          "Те, кто живёт и работает в регионах, где есть частые перепады из тепла в холод."
        )}
        {renderListItem(
          "Дети и подростки с прогрессирующей близорукостью, когда нужно физическое ограничение механики роговицы."
        )}
      </ul>
    </div>
  );
};
