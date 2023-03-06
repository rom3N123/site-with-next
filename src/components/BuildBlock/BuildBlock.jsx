import React from "react";
import styles from "./BuildBlock.module.css"
const BuildBlock = () => {
  return (
    <div className={styles.build}>
      <div className="container">
        <div className={styles.build__post}>
          <p className={styles.build__text}>
            Строительство домов
            <br />
            во Владимире и <br /> Владимирской области
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildBlock;
