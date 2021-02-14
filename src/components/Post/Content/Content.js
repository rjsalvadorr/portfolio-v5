// @flow strict
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title, galleryView }: Props) => {
  const extraClass = galleryView ? styles['content--gallery'] : null;
  const extraClass2 = galleryView ? styles['content--gallery__title'] : null;

  return (
  <div className={`${styles['content']} ${extraClass}`}>
    <h1 className={`${styles['content__title']} ${extraClass2}`}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)};

export default Content;
