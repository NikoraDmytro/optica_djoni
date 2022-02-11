import Image from "next/image";

import styles from "./AskQuestion.module.scss";

import { QuestionForm } from "./components/QuestionForm";

export const AskQuestion = () => {
  return (
    <div className={styles.AskQuestionContainer}>
      <div className={styles.left}>
        <div className={styles.AskQuestionInfo}>
          <Image
            src="/icons/eye.svg"
            alt=""
            width={120}
            height={120}
            layout="fixed"
          />

          <h1>Есть вопросы?</h1>

          <p>Оставьте заявку и мы вам<br /> перезвоним в течение дня.</p>
        </div>
      </div>

      <div className={styles.right}>
        <QuestionForm />
      </div>
    </div>
  );
};
