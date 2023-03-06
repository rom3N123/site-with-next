import React, { useContext } from "react";
import styles from "./BurgerButton.module.css";
import clsx from "clsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { BurgerMenuContext } from "../../contexts/BurgerMenuContext/BurgerMenuContext";
const BurgerButton = () => {
  const { active, onClick } = useContext(BurgerMenuContext);

  return (
    <>
      <button
        onClick={onClick}
        className={clsx(styles.burger, active && styles.burgerActive)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      <BurgerMenu  />
    </>
  );
};

export default BurgerButton;
