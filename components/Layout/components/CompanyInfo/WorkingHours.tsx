import styles from "./CompanyInfo.module.scss";

export const CompanyWorkingHours = () => {
  return (
    <div className={styles.workingHours}>
      <p>
        <b>пн - пт</b> 08:00 - 19:00
      </p>
      <p>
        <b>сб</b> 10:00 - 18:00
      </p>
      <p>
        <b>вс</b> 10:00 - 17:00
      </p>
    </div>
  );
};
