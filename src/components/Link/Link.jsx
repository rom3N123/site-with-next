import React from "react";
import styles from "./Link.module.css";
const Link = ({ href, icon, text }) => {
  return (
    <a href={href} className={styles.link}>
      {icon}
      {text}
    </a>
  );
};

export default Link;
