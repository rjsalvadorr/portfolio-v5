import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  isIndex?: boolean,
  children: React.Node
};

const Page = ({ title = 'reluctant adjustments', isIndex, children }: Props) => {
  const pageRef = useRef();
  const isIndexClass = isIndex ? `${styles['page__title--index']}` : null;

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={`${styles['page__title']} ${isIndexClass}`}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;