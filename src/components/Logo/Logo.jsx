import React from "react";
import logoIcon from "../../images/logo.svg";
import styles from "./Logo.module.css";
import Image from 'next/image'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={logoIcon} alt="Моностройк логотип" />
      <p className={styles.logo__text}>Монострой</p>
    </div>
  );
};

export default Logo;
