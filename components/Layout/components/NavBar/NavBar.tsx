import classNames from "classnames";

import styles from "./NavBar.module.scss";

import { NavBarItem } from "./NavBarItem";

interface NavBarProps {
  className?: string;
  fullScreen?: boolean;
  style?: React.CSSProperties;
}

export const NavBar = (props: NavBarProps) => {
  const navBarClass = classNames(props.className, {
    [styles.navBar]: !props.fullScreen,
    [styles.fullScreenNavBar]: props.fullScreen,
  });

  return (
    <nav className={navBarClass} style={props.style}>
      <NavBarItem
        href={`/pediatric_ophthalmology`}
        text="ДЕТСКАЯ ОФТАЛЬМОЛОГИЯ"
      />

      <NavBarItem href={`/adult_ophthalmology`} text="ВЗРОСЛАЯ ОФТАЛЬМОЛОГИЯ" />

      <NavBarItem href={`/night_eyeglass`} text="НОЧНАЯ ЛИНЗЫ" />

      <NavBarItem href={`/optics`} text="ОПТИКА" />

      <NavBarItem href={`/workshop`} text="МАСТЕРСКАЯ" />
    </nav>
  );
};
