import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

import styles from "./NavBar.module.scss";

type NavBarItemProps = {
  href: string;
  text: string;
};

export const NavBarItem = (props: NavBarItemProps) => {
  const path = useRouter().pathname;

  const className = classNames({
    [styles.navBarItem]: true,
    [styles.active]: props.href === path,
  });

  return (
    <div className={className}>
      <Link href={props.href}>
        <a>{props.text}</a>
      </Link>
    </div>
  );
};
