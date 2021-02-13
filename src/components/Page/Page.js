import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  isIndex?: boolean,
  isTag?: boolean,
  children: React.Node
};

const Page = ({ title = 'home', isIndex, isTag, children }: Props) => {
  const pageRef = useRef();
  let pageTitle = isIndex ? 'home' : title;
  if (isTag) {
    pageTitle = `tag: ${pageTitle}`;
  }

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { pageTitle && <h1 className={styles['page__title']}>{pageTitle}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;