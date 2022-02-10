import Image from "next/image";

import { NavBar } from "../NavBar/NavBar";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/image/logo.png" alt="Logo" width={180} height={80} layout="fixed"/>

      <div className={styles.info}>
        <NavBar orientation="vertical" />
        
        <div>
          <div className={styles.location}>
            <p>Где находимся?</p>
            <span>
              <Image src="/icons/location.svg" alt="" width={18} height={18} />{" "}
              Харьков, пр. Героев Сталинграда, 140
            </span>
          </div>

          <div className={styles.workTime}>
            <p>Как работаем?</p>
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
        </div>

        <div>
          <div className={styles.contacts}>
            <div>
              <Image src="/icons/phone.svg" alt="" width={18} height={18} /> {" "}
              <p>Запись по телефону</p>
            </div>
            <span>+ 380 63 604 38 01</span>
          </div>

          <div>
            <p>Мы в социальных сетях:</p>
            <div className={styles.socialMedia}>
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
