// @flow strict
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: String,
  galleryView: Boolean,
};

const Content = ({ body, galleryView }: Props) => {
  const extraClass = galleryView ? styles['content--gallery'] : null;

  return (
  <div className={`${styles['content']} ${extraClass}`}>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)};

export default Content;
