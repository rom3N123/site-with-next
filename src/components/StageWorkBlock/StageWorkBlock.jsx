import React from "react";
import styles from "./StageWorkBlock.module.css";

const StageWorkBlock = (props) => {
  return (
    <div className={styles.stage__work__post}>
      <div className={styles.stage__work__post__inner}>
        <div className={styles.stage__work__post__number}>
          <h4>{props.numberblock}</h4>
        </div>
        <div className={styles.stage__work__post__heading}>
          <h6>{props.headingblock}</h6>
        </div>
        <div className={styles.stage__work__post__description}>
          <h6>{props.descriptionblock}</h6>
        </div>
      </div>
    </div>
  );
};

export default StageWorkBlock;
