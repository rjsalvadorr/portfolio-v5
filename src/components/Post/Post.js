// @flow strict
import React from 'react';
import Content from './Content';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const GALLERY_TAGS = [
  'code-sketch',
  'painting',
  'sketchbook',
]

const isGallery = (tagClasses) => {
  const isGalleryTag = (tag) => {
    if (GALLERY_TAGS.includes(tag)) {
      return true;
    }
  };
  return tagClasses.some(isGalleryTag);
}

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tags, title } = post.frontmatter;
  const tagClasses = tags.map((tag) => tag.toLowerCase().replace(' ', '-'));
  const izGallery = isGallery(tagClasses);

  const innerClass = izGallery ? `${styles['post__inner']} ${styles['post--gallery__inner']}` : styles['post__inner'];

  return (
    <div className={styles['post']}>
      <div className={innerClass}>
        <div className={styles['post__content']}>
          <Content body={html} title={title} galleryView={izGallery} />
        </div>
      </div>
    </div>
  );
};

export default Post;
