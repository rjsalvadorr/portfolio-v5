import React from 'react';
import { Link } from 'gatsby';
import styles from './NavMenu.module.scss';

type Props = {
  posts: Array,
  selected: String,
};

const NavMenu = ({ posts, selected }: Props) => {
  const selectedSlug = selected || '/';
  console.log(selected, selectedSlug);

  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["nav-menu"]}>
        <div className={styles["nav-item"]}>
          <img src="https://picsum.photos/96" className={styles["nav-item__img"]} />
          <span className={styles["nav-item__name"]}>Home</span>
        </div>
        <div className={styles["nav-item"]}>
          <img src="https://picsum.photos/96" className={styles["nav-item__img"]} />
          <span className={styles["nav-item__name"]}>CV</span>
        </div>
        <div className={styles["nav-item"]}>
          <img src="https://picsum.photos/96" className={styles["nav-item__img"]} />
          <span className={styles["nav-item__name"]}>Links</span>
        </div>
        <div className={styles["nav-item nav-item--blank"]} />

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
