import React from 'react';
import styles from './MainHeader.module.scss';

type Props = {
  title: String,
  subtitle: String,
  blurb: String,
};

const MainHeader = ({ title, subtitle, blurb }: Props) => {
  console.log(title, subtitle, blurb);

  return (
    <div className={styles["main-header"]}>
      <h1 className={styles["main-header__title"]}>{title}</h1>
      <span className={styles["main-header__subtitle"]}>{subtitle}</span>
      <span className={styles["main-header__blurb"]}>{blurb}</span>
    </div>
  );
};

export default MainHeader;
