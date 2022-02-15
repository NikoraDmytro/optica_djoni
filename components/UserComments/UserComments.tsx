import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import comments from "./comments.json";

import eye from "./svg/eye_3.svg";
import angle from "./svg/angle.svg";
import bottomPicture from "./svg/bottom_picture.svg";

import styles from "./UserComments.module.scss";

export const UserComments = () => {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const comment = comments[current];

  const showLessOrMore = () => {
    setExpanded(!expanded);
  }

  return (
    <div className={styles.userCommentsContainer}>
      <h1 className={styles.title}>ЧТО ГОВОРЯТ О НАС КЛИЕНТЫ</h1>

      <div className={styles.commentsSliderContainer}>
        <Image src={angle} alt="" width={117} height={143} layout="fixed" />
        <Image src={eye} alt="" width={160} height={77} layout="fixed" />

        <button className={styles.prevCommentButton} />

        <div className={styles.commentsSlider}>
          <div className={styles.comment}>
            {comment}{" "}
            <strong onClick={showLessOrMore} className={styles.textExpander}>
              {expanded ? "Скрыть" : "Читать полностью"}
            </strong>
          </div>
        </div>

        <button className={styles.nextCommentButton} />
      </div>

      <Image src={bottomPicture} alt="" width={932} height={343} />
    </div>
  );
};
