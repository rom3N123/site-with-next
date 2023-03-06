import React from "react";
import styles from "./Results.module.css";
const Results = ({ number, sense }) => {
  return (
    <div className={styles.build__statistics}>
      <h1 className={styles.number}>{number}</h1>
      <div className={styles.link__bar}></div>
      <h5 className={styles.build__description}>{sense}</h5>
    </div>
  );
};

export default Results;
