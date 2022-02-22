import Link from "next/link";
import classNames from "classnames";

import { PageName } from "../../../../shared/types/Types";
import { NavBarProps } from "../../../../shared/types/Props";

import styles from "./NavBar.module.scss";

export const NavBar = ({ orientation, currentPage }: NavBarProps) => {
  const navBarClass = classNames({
    [styles.navBar]: true,
    [styles.verticalNavBar]: orientation === "vertical",
    [styles.horizontalNavBar]: orientation === "horizontal",
  });

  const getLinkClassName = (pageName: PageName) => {
    return classNames({
      [styles.activeLink]: pageName === currentPage,
    });
  };

  return (
    <nav className={navBarClass}>
      <Link href="/pediatric_ophthalmology">
        <a className={getLinkClassName("pediatric_ophthalmology")}>
          ДЕТСКАЯ ОФТАЛЬМОЛОГИЯ
        </a>
      </Link>

      <span className={styles.separator} />

      <Link href="/adult_ophthalmology">
        <a className={getLinkClassName("adult_ophthalmology")}>
          ВЗРОСЛАЯ ОФТАЛЬМОЛОГИЯ
        </a>
      </Link>

      <span className={styles.separator} />

      <Link href="/night_eyeglass">
        <a className={getLinkClassName("night_eyeglass")}>НОЧНАЯ ЛИНЗЫ</a>
      </Link>

      <span className={styles.separator} />

      <Link href="/optics">
        <a className={getLinkClassName("optics")}>ОПТИКА</a>
      </Link>

      <span className={styles.separator} />

      <Link href="/workshop">
        <a className={getLinkClassName("workshop")}>МАСТЕРСКАЯ</a>
      </Link>
    </nav>
  );
};
