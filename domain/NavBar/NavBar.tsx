import Link from "next/link";
import classNames from "classnames";

import styles from "./NavBar.module.scss";

interface Props {
  orientation: "horizontal" | "vertical";
}

export const NavBar = ({ orientation }: Props) => {
  const navBarClass = classNames({
    [styles.navBar]: true,
    [styles.verticalNavBar]: orientation === "vertical",
    [styles.horizontalNavBar]: orientation === "horizontal",
  });

  return (
    <nav className={navBarClass}>
      <Link href="/">ДЕТСКАЯ ОФТАЛЬМОЛОГИЯ</Link>

      <span className={styles.separator} />

      <Link href="/">ВЗРОСЛАЯ ОФТАЛЬМОЛОГИЯ</Link>

      <span className={styles.separator}/>

      <Link href="/">НОЧНАЯ ЛИНЗЫ</Link>

      <span className={styles.separator} />

      <Link href="/">ОПТИКА</Link>

      <span className={styles.separator} />
      
      <Link href="/">МАСТЕРСКАЯ</Link>
    </nav>
  );
};
