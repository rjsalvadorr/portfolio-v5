import React from 'react';
import styles from './MainHeader.module.scss';

type Props = {
  title: string,
  date: string,
  category: string,
  blurb: string,
};

const MainHeader = ({ title, date, category, blurb }: Props) => {
  console.log('MainHeader', title, date, category, blurb);

  return (
    <div className={styles["main-header"]}>
      <h1 className={styles["main-header__title"]}>{title}</h1>
      <p className={styles["main-header__info"]}>
        <span className={styles["main-header__date"]}>
          { new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
        </span>
        {category && 
          <span className={styles["main-header__category"]}>&nbsp; — &nbsp;{category}</span>
        }
      </p>
      <p className={styles["main-header__details"]}>
        {blurb &&
          <span className={styles["main-header__blurb"]}>
            {blurb}
          </span>
        }
      </p>
    </div>
  );
};

export default MainHeader;
