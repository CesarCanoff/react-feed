import STYLES from "./Header.module.css";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={STYLES.header}>
      <img src={Logo} alt="Web app logo" />
    </header>
  );
}
