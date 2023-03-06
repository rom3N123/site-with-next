import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      <p className={styles.logo__text}>Монострой</p>
    </div>
  );
};

export default Logo;
