import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import comments from "./comments.json";

import { Comment } from "./components/Comment";

import eye from "./svg/eye_3.svg";
import angle from "./svg/angle.svg";
import bottomPicture from "./svg/bottom_picture.svg";

import styles from "./UserComments.module.scss";

export const UserComments = () => {
  const [current, setCurrent] = useState(0);

  const total = comments.length;
  const comment = comments[current];

  const nextComment = () => {
    setCurrent((current + 1) % total);
  };

  const previousComment = () => {
    setCurrent(current == 0 ? total - 1 : current - 1);
  };

  return (
    <div className={styles.commentsContainer}>
      <h1 className={styles.title}>ЧТО ГОВОРЯТ О НАС КЛИЕНТЫ</h1>

      <div className={styles.commentsSlider}>
        <div className={styles.iconLeft}>
          <Image src={angle} alt="" width={117} height={143} layout="fixed" />
        </div>
        <div className={styles.iconRight}>
          <Image src={eye} alt="" width={160} height={77} layout="fixed" />
        </div>

        <button
          className={styles.prevCommentButton}
          onClick={previousComment}
        />

        <Comment comment={comment} />

        <button className={styles.nextCommentButton} onClick={nextComment} />
      </div>

      <div className={styles.iconBottom}>
        <Image src={bottomPicture} alt="" width={932} height={343} />
      </div>
    </div>
  );
};
