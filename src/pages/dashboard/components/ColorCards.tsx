import React from 'react';
import styles from './styles/ColorCards.module.scss';
import { RxBarChart } from 'react-icons/rx';

type ColorCardsProps = {
  title: string;
  subtitle: string;
  date: string;
  type: string;
};

const ColorCards = ({ title, subtitle, date, type = 'pink', ...props }: ColorCardsProps) => {
  const stylesHandler = (type: string) => {
    let className = '';
    if (type === 'pink') className = styles.styleOne;
    if (type === 'yellow') className = styles.styleTwo;
    if (type === 'purple') className = styles.styleThree;
    return className;
  };

  const template = (type: string) => {
    let res = <></>;
    switch (type) {
      case 'pink':
      case 'yellow':
        res = (
          <div className={`${styles.wrapper} ${stylesHandler(type)}`}>
            <div className={`${styles.wrapper_title} ${styles.primary}`}>Revinues</div>
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
        break;
      case 'purple':
        res = (
          <div className={`${styles.wrapper} ${stylesHandler(type)}`}>
            <div className={`${styles.wrapper_title} ${styles.second}`}>Page Vew</div>
            <div className={styles.wrapper_block}>
              <div className={styles.content}>
                <div className={styles.content_title}>$432</div>
              </div>
            </div>
          </div>
        );
        break;
    }
    return res;
  };

  return template(type);
};

export default ColorCards;
