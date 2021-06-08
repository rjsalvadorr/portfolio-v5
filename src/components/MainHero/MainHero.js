import React from 'react';
import styles from './MainHero.module.scss';

type Props = {
  src: String,
};

const MainHero = ({ src }: Props) => {
  console.log(src);

  return (
    <div className={styles["main-hero"]}>
      <img src={src} />
    </div>
  );
};

export default MainHero;
