import classNames from "classnames";
import { useState } from "react";

import styles from "./FrequentQuestion.module.scss";

type Question = {
  text: string;
  answer: string;
};

interface Props {
  questions: Question[];
}

const Question = ({ question }: { question: Question }) => {
  const [opened, setOpened] = useState(false);

  const className = classNames({
    [styles.questionBlock]: true,
    [styles.opened]: opened,
  });

  const buttonClassName = classNames({
    [styles.showAnswerButton]: true,
    [styles.active]: opened,
  });

  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className={styles.questionBlockHeader}>
        <h2 className={styles.subTitle}>{question.text}</h2>
        <button className={buttonClassName} />
      </div>

      {opened ? <p className={styles.answer}>{question.answer}</p> : null}
    </div>
  );
};

export const FrequentQuestion = ({ questions }: Props) => {
  return (
    <div className={styles.container_white}>
      <h1 className={styles.largeTitle}>Часто задаваемые вопросы</h1>

      {questions.map((question) => (
        <Question key={question.text} question={question} />
      ))}
    </div>
  );
};
