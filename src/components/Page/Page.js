import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  isIndex?: boolean,
  children: React.Node
};

const Page = ({ title = 'home', isIndex, children }: Props) => {
  const pageRef = useRef();
  const pageTitle = isIndex ? 'home' : title;
  // const isIndexClass = isIndex ? `${styles['page__title--index']}` : null;
  const isIndexClass = null;

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { pageTitle && <h1 className={`${styles['page__title']} ${isIndexClass}`}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;