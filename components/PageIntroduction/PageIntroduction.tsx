import Link from "next/link";
import Image from "next/image";

import styles from "./PageIntroduction.module.scss";

import { PageIntroductionProps } from "../../shared/types/Props";

export const PageIntroduction = (props: PageIntroductionProps) => {
  const { page, pageIcon, backgroundImageUrl, anchorTags } = props;

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={styles.pageIntroduction}>
        <div className={styles.icon}>
          <Image src={pageIcon} alt="" width={120} height={120} />
        </div>

        <div>
          <h1 className={styles.largeTitle}>{page}</h1>

          <ul className={styles.archonTags}>
            {anchorTags.map((anchor) => (
              <Link key={anchor.name} href={anchor.href} passHref>
                <li className={styles.archon}>{anchor.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
