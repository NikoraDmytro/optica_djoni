import Image from "next/image";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/image/logo.png"
        alt="Logo"
        width={180}
        height={80}
        layout="fixed"
      />

      <div className={styles.info}>
        <div className={styles.location}>
          <p>Где находимся?</p>
          <span>
            <Image src="/icons/location.svg" alt="" width={18} height={18} />
            {" "}
            Харьков, пр. Героев Сталинграда, 140
          </span>
        </div>

        <div className={styles.workTime}>
          <p>
            <span>пн - пт</span> 08:00 - 19:00
          </p>
          <p>
            <span>сб</span> 10:00 - 18:00
          </p>
          <p>
            <span>вс</span> 10:00 - 17:00
          </p>
        </div>

        <div className={styles.contacts}>
          <div>
            <Image src="/icons/phone.svg" alt="" width={18} height={18} />
            <p>Запись по телефону</p>
          </div>
          <span>+ 380 63 604 38 01</span>
        </div>

        <div>
          <p>Язык сайта</p>
          <select id="language" className={styles.languageSelect}>
            <option id="language">Русский</option>
            <option id="language">English</option>
          </select>
        </div>
      </div>
    </header>
  );
};
