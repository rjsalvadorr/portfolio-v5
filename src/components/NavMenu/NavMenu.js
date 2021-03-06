import React from 'react';
import { Link } from 'gatsby';
import styles from './NavMenu.module.scss';

type Props = {
  posts: Array,
  selected: string,
  isIndex: boolean,
};

const NavMenu = ({ posts, selected, isIndex }: Props) => {
  const selectedSlug = selected || '/';
  let homeItemStyle = styles["nav-item"];
  if (isIndex) {
    homeItemStyle += ' ' + styles["nav-item--selected"];
  }
  homeItemStyle += ' ' + styles["nav-item--svg"];
  homeItemStyle += ' ' + styles["nav-item--home"];
  // console.log('NavMenu', posts, selected, isIndex, selectedSlug);

  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["nav-menu"]}>
        <div className={homeItemStyle}>
          <Link to="/">
            <img src="/home-icon.svg" className={styles["nav-item__img"]} />
          </Link>
          <div className={styles["nav-item__indicator"]} />
        </div>

        {posts.map((postEdge) => {
          const postSlug = postEdge.node.fields.slug;
          let itemStyle = styles["nav-item"];
          if (selectedSlug === postSlug) {
            itemStyle += ' ' + styles["nav-item--selected"];
          }
          if (postSlug === '/posts/links') {
            itemStyle += ' ' + styles["nav-item--svg"];
          }
          return (
            <div className={itemStyle} key={postSlug}>
              <Link to={postSlug || ''}>
                <img src={`/${postEdge.node.frontmatter.thumbnail}`} className={styles["nav-item__img"]} />
              </Link>
              <div className={styles["nav-item__indicator"]} />
            </div>
          );
        }
        )}
      </nav>
    </div>
  );
};

export default NavMenu;
