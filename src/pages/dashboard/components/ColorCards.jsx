import React from "react";
import styles from "./styles/ColorCards.module.scss";
import { RxBarChart } from "react-icons/rx";

const ColorCards = ({ title, subtitle, date, type = "pink" }) => {
  const stylesHandler = (type) => {
    let className = "";
    if (type === "pink") className = styles.styleOne;
    if (type === "yellow") className = styles.styleTwo;
    return className;
  };

  return (
    <div className={`${styles.wrapper} ${stylesHandler(type)}`}>
      <div className={styles.wrapper_title}>Revinues</div>
      <div className={styles.wrapper_block}>
        <div className={styles.icon}>
          <RxBarChart />
        </div>
        <div className={styles.content}>
          <div className={styles.content_title}>$432</div>
          <div className={styles.content_subtitle}>2022/01/02</div>
        </div>
      </div>
    </div>
  );
};

export default ColorCards;
