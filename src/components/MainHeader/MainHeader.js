import React from 'react';
import styles from './MainHeader.module.scss';

type Props = {
  title: string,
  subtitle: string,
  date: string,
  category: string,
  blurb: string,
  isIndex: boolean,
  hideDate: boolean,
};

const MainHeader = ({
  title,
  subtitle,
  date,
  category,
  blurb,
  isIndex,
  hideDate
}: Props) => {
  console.log('MainHeader', title, subtitle, date, category, blurb, isIndex, hideDate);
  let detailStyle = styles["main-header__details"];
  if (isIndex) {
    detailStyle += ` ${styles["main-header__details--index"]}`;
  }

  return (
    <div className={styles["main-header"]}>
      <h1 className={styles["main-header__title"]}>{title}</h1>
      <p className={styles["main-header__info"]}>
        {category && 
          <span className={styles["main-header__category"]}>{category}<br /></span>
        }
        {date && !hideDate &&
          <span className={styles["main-header__date"]}>
            { new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
          </span>
        }
        {hideDate && subtitle &&
          <span className={styles["main-header__date"]}>
            {subtitle}
          </span>
        }
      </p>
      <p className={detailStyle}>
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
