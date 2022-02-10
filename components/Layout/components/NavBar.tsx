import Link from "next/link";

interface Props {
  orientation: "vertical" | "horizontal";
}

export const NavBar = ({ orientation }: Props) => {
  return (
    <nav>
      <Link href="/">
        <a>ДЕТСКАЯ ОФТАЛЬМОЛОГИЯ</a>
      </Link>
      <Link href="/">
        <a>ВЗРОСЛАЯ ОФТАЛЬМОЛОГИЯ</a>
      </Link>
      <Link href="/">
        <a>НОЧНАЯ ЛИНЗЫ</a>
      </Link>
      <Link href="/">
        <a>ОПТИКА</a>
      </Link>
      <Link href="/">
        <a>МАСТЕРСКАЯ</a>
      </Link>
    </nav>
  );
};
