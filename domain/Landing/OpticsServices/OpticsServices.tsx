import Link from "next/link";
import Image from "next/image";
import { getImageName } from "../../../utils/getImageName";

import services from "./services.json";

import styles from "./OpticsServices.module.scss";
import { PageName } from "../../../shared/types/Types";

const page: PageName = "night_eyeglass";

export const OpticsServices = () => {
  return (
    <div className={styles.container_blue}>
      <div className={styles.wrapper}>
        <div className={styles.introductoryText}>
          <h1 className={styles.title}>НАШИ УСЛУГИ</h1>

          <p>
            В Оптика Джони огромный выбор оправ (более 1000 моделей), контактных
            линз и солнцезащитных очков. Растворы, капли и аксессуары все время
            в наличии. Оптика работает со всеми поставщиками линз для очков,
            которые представлены в Украине. Постоянное обновление ассортимента
            не оставит ваше сердце безразличным.
          </p>

          <p>
            Действует программа лояльности для постоянных клиентов. В оптика
            Джони профессиональный штат сотрудников с медицинским образованием,
            которые помогут вам определится с тем или иным вопросом.
          </p>
        </div>

        {services.map((service) => {
          const url = service.iconUrl;
          const name = getImageName(url);

          return (
            <div key={name} className={styles.serviceBlock}>
              <Image
                src={url}
                alt={name}
                width={120}
                height={120}
                layout="fixed"
              />

              <h1 className={styles.serviceName}>{service.title}</h1>

              <Link href={service.link} passHref>
                <button className={styles.btn_primary}>
                  <a>Подробнее</a>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
