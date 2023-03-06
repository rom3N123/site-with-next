import React from "react";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import PhoneIcon from "../../images/phone.svg";
import MailIcon from "../../images/mail.svg";
import BurgerButton from "../BurgerButton/BurgerButton";
const Header = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          <a href="#stage-work" className={styles.header__link}>
            Этапы работы
          </a>
          <a href="#our successes" className={styles.header__link}>
            Наши успехи
          </a>
          <a href="#gallery" className={styles.header__link}>
            Галерея
          </a>
          <a href="#footer" className={styles.header__link}>
            Контакты
          </a>
        </nav>
        <div className={styles.header__contacts}>
          <Link
            href="tel:+79621620835"
            icon={<img src={PhoneIcon} />}
            text="+7(962)162-08-35"
          />
          <Link
            href="mailto:lutenkov33@gmail.com"
            icon={<img src={MailIcon} />}
            text="lutenkov33@gmail.com"
          />
        </div>
        <BurgerButton />
      </div>
    </div>
  );
};

export default Header;
