import classNames from "classnames";
import { useState } from "react";
import styles from "./Comment.module.scss";

interface Props {
  comment: string;
}

export const Comment = ({ comment }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.comment}>
      <p
        className={classNames({
          [styles.commentText]: true,
          [styles.short]: !expanded,
        })}
      >
        {comment}
      </p>
      <strong onClick={expand} className={styles.textExpander}>
        {expanded ? "Скрыть" : "Читать полностью"}
      </strong>
    </div>
  );
};
