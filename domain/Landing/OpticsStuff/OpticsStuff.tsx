import Image from "next/image";

import { getImageName } from "../../../utils/getImageName";

import stuff from "./stuff.json";

import styles from "./OpticsStuff.module.scss";

export const OpticsStuff = () => {
  return (
    <div className={styles.container_white}>
      <h1 className={styles.title}>Команда Оптика Джони</h1>

      <div className={styles.employeesBlock}>
        {stuff.map((employee) => {
          const photo = employee.photo;
          const name = getImageName(photo);

          return (
            <div key={name}>
              <div className={styles.employeePhoto}>
                <Image
                  src={photo}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>

              <h1 className={styles.subTitle}>{employee.name}</h1>

              <p className={styles.employeeSpecialization}>
                {employee.specialization}
              </p>

              <strong className={styles.employeeExperience}>
                {employee.experience} лет опыта
              </strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};
