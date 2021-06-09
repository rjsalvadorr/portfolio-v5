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
  console.log(selected, selectedSlug);

  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["nav-menu"]}>
        <div className={homeItemStyle}>
          <Link to="/">
            <img src="https://picsum.photos/96" className={styles["nav-item__img"]} />
            <span className={styles["nav-item__name"]}>Home</span>
          </Link>
        </div>

        {posts.map((postEdge) => {
          const postSlug = postEdge.node.fields.slug;
          let itemStyle = styles["nav-item"];
          if (selectedSlug === postSlug) {
            itemStyle += ' ' + styles["nav-item--selected"];
          }
          return (
            <div className={itemStyle} key={postSlug}>
              <Link to={postSlug || ''}>
                <img src="https://picsum.photos/96" className={styles["nav-item__img"]} />
                <span className={styles["nav-item__name"]}>{postEdge.node.frontmatter.title}</span>
              </Link>
            </div>
          );
        }
        )}
      </nav>
    </div>
  );
};

export default NavMenu;
