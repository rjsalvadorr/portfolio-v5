import React from 'react';
import styles from './MainHero.module.scss';

type Props = {
  paths: Array,
};

const MainHero = ({ paths }: Props) => {
  console.log('MainHero', paths);

  return (
    <div className={styles["main-hero"]}>
      {paths.map((imgPath) => (
        <div className={styles["main-hero__img-wrap"]} key={imgPath}>
          <img className={styles["main-hero__img"]} src={imgPath} />
        </div>
      ))}
    </div>
  );
};

export default MainHero;
