import React from "react";
import styles from "./BurgerMenu.module.css";
import clsx from "clsx";
import { useContext } from "react";
import { BurgerMenuContext } from "../../contexts/BurgerMenuContext/BurgerMenuContext";
const anchors = [
  {
    name: "Этапы работы",
    href: "#stage-work",
  },
  {
    name: "Наши успехи",
    href: "#our successes",
  },
  {
    name: "Галерея",
    href: "#gallery",
  },
  {
    name: "Контакты",
    href: "#footer",
  },
];

const BurgerMenu = () => {
  const { active, onClose } = useContext(BurgerMenuContext);
  return (
    <>
      {active && <div className={styles.back} onClick={onClose}></div>}

      <div className={clsx(styles.panel, active && styles.panelActive)}>
        <div className={styles.panel__block}>
          {anchors.map(({ name, href }) => {
            return (
              <div key={href} className={styles.panel__block__object}>
                <a onClick={onClose} href={href} className="header__link">
                  {name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
