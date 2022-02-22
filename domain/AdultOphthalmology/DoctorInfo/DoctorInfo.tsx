import Image from "next/image";

import styles from "./DoctorInfo.module.scss";

export const AdultOphthalmologyDoctorInfo = () => {
  return (
    <div className={styles.doctorInfoContainer} id="adultOphthalmologyDoctor">
      <div className={styles.doctorImage}>
        <Image src="/image/doctor_2.png" alt="" layout="fill" />
      </div>

      <div className={styles.infoBlock}>
        <h1 className={styles.doctorName}>Фамилия Имя Отчество</h1>

        <h2 className={styles.doctorExperience}>20 лет опыта</h2>

        <p className={styles.doctorInfo}>
          Взрослый доктор офтальмолог. Прекраснейший специалист, доктор высшей
          категории. Она каким - то магическим образом воздействует на своих
          пациентов. После приема пациенты всегда остаются довольными. Главное
          качество доктора , что она к каждому пациенту находит свой подход и
          всегда довольно детально обьясняет результаты обследования. Если вам
          нужно обследование, подбор прогрессивных, офисных очков, контактных
          линз, тогда приходите к нашему взрослому доктору офтальмологу.
        </p>
      </div>
    </div>
  );
};
