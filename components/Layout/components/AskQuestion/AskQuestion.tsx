import classNames from "classnames";
import Image from "next/image";

import styles from "./AskQuestion.module.scss";

import { QuestionForm } from "./components/QuestionForm";

export const AskQuestion = () => {
  const containerClassName = classNames(
    [styles.AskQuestionContainer],
    [styles.container_white]
  );

  return (
    <div className={containerClassName}>
      <div>
        <div className={styles.AskQuestionInfo}>
          <Image
            src="/icons/eye.svg"
            alt=""
            width={120}
            height={120}
            layout="fixed"
          />

          <h1 className={styles.largeTitle}>Есть вопросы?</h1>

          <p className={styles.subTitle}>
            Оставьте заявку и мы вам
            <br /> перезвоним в течение дня.
          </p>
        </div>
      </div>

      <div className={styles.formWrapper}>
        <QuestionForm />
      </div>
    </div>
  );
};
