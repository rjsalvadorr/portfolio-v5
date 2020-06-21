import React from 'react';
import {Link} from 'gatsby';
import pages from '../data/pages'
import mainStyles from '../styles/main.module.css';
import moment from 'moment';

export const getSection = (location) => {
  const pathArr = location.pathname.split ('/').filter (function (el) {
    return el;
  });
  
  let section = '';
  if (pathArr.length > 0) {
    section = pathArr[0];
  }

  return section;
}

const pageData404 = {
  id: 5,
  name: '404',
  section: '404',
  path: '/',
};

export const getPageDataFromLocation = (location) => {
  const section = getSection(location);
  const pageResult = pages.find(page => page.section === section);

  if(pageResult) {
    return pageResult;
  } else {
    return pageData404;
  }
}

export const getPageDataFromSection = (section) => {
  const pageResult = pages.find(page => page.section === section);

  if(pageResult) {
    return pageResult;
  } else {
    return pageData404;
  }
}

export const renderPostLink = (postData) => {
  return (
    <article key={postData.dest} className={mainStyles.postArticle}>
      <header>
        <h2 className={mainStyles.postHeading}>
          <Link
            className={mainStyles.postHeadingLink}
            to={postData.dest}
          >
            {postData.title}
          </Link>
        </h2>
        <small
          style={{
            display: 'block',
            marginBottom: '0.2rem',
            marginTop: '-0.3rem',
          }}
        >
          {moment(postData.date).format("MMMM DD, YYYY")}
        </small>
      </header>
      <Link to={postData.dest}>
        {postData.thumb}
      </Link>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: postData.description,
          }}
        />
      </section>
    </article>
  )
}
