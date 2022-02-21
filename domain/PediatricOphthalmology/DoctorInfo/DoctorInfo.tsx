import Image from "next/image";

import styles from "./DoctorInfo.module.scss";

export const PediatricOphthalmologyDoctorInfo = () => {
  return (
    <>
      <div className={styles.container_white}>
        <div className={styles.doctorImage}>
          <Image src="/image/doctor_1.png" alt="" layout="fill" />
        </div>

        <h1 className={styles.doctorName}>Фамилия Имя Отчество</h1>

        <h2 className={styles.doctorExperience}>20 лет опыта</h2>

        <p className={styles.doctorInfo}>
          Детский доктор офтальмолог. Доктор высшей категории, любимица наших
          маленьких пациентов. Как приятно наблюдать, когда дети обнимают с
          благодарностью доктора, после прохождения аппаратного лечения. Как они
          улыбаются наконец то увидев мир в очках (линзах). Если вашему ребенку
          необходимо обследование, подбор новых очков, контактных линз или может
          просто нужны глазные тренировки, тогда приходите к и она вам
          обязательно поможет.
        </p>
      </div>

      <div className={styles.video}>
        <Image
          src="/image/pediatric_ophthalmology_video.png"
          alt="video"
          layout="fill"
        />
      </div>
    </>
  );
};
