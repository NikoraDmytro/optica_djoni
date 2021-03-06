import Image from "next/image";

import styles from "./ListOfServices.module.scss";

import { Service } from "../../shared/types/Types";
import { ListOfServicesProps } from "../../shared/types/Props";

export const ListOfServices = (props: ListOfServicesProps) => {
  const { title, subTitle, services, margin } = props;

  const renderListItem = (service: Service, index: number) => (
    <li key={index} style={{ marginBottom: margin }}>
      <div className={styles.service}>
        <div className={styles.ticIcon}>
          <Image src="/icons/tic.svg" alt="" width={24} height={24} />
        </div>

        <p>{service.name}</p>
      </div>

      {service.clarification && (
        <span className={styles.clarification}>{service.clarification}</span>
      )}
    </li>
  );

  return (
    <div className={styles.container_white} id={props.id}>
      <h1 className={styles.title}>{title}</h1>

      <h3 className={styles.servicesSubtitle}>{subTitle}</h3>

      <ul className={styles.servicesList}>
        {services.map((service, index) => renderListItem(service, index))}
      </ul>
    </div>
  );
};
