// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
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
  // const { tagSlugs, slug } = post.fields;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const tagClasses = tags.map((tag) => tag.toLowerCase().replace(' ', '-'));

  return (
    <div className={styles['post']}>
      <div className={styles['post__inner']}>
        <div className={styles['post__button-wrapper']}>
          <Link className={styles['post__home-button']} to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
        </div>

        <div className={styles['post__content']}>
          <Content body={html} title={title} galleryView={isGallery(tagClasses)} />
        </div>

        <div className={styles['post__footer']}>
          <Meta date={date} />
          {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
          {/* <Author /> */}
        </div>

        {/* <div className={styles['post__comments']}>
          <Comments postSlug={slug} postTitle={post.frontmatter.title} />
        </div> */}
      </div>
    </div>
  );
};

export default Post;
