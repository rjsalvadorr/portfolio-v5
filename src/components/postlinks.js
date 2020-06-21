import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import mainStyles from '../styles/main.module.css';

const PostLinks = ({posts}) => {

  return (
    <div className={mainStyles.postLinks}>
      {posts.map (({node}) => {
        const title = node.frontmatter.title || node.fields.slug;
        const subtitle = node.frontmatter.subtitle || '';
        let thumb;
        console.log(node.frontmatter);
        const hideDescription = node.frontmatter.options && node.frontmatter.options.includes('hideDesc');

        if (
          node.frontmatter.thumbnail &&
          node.frontmatter.thumbnail.childImageSharp
        ) {
          const thumbFluid = node.frontmatter.thumbnail.childImageSharp.fluid;
          thumb = (
            <Img
              style={{
                borderRadius: '4px',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.33)',
                marginBottom: '0.66rem',
              }}
              fluid={thumbFluid}
            />
          );
        }

        if (node.frontmatter.type === 'link') {
          return (
            <article key={node.fields.slug} className={mainStyles.postArticle}>
              <a
                href={node.frontmatter.target_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <header style={{marginBottom: '0.2rem'}}>
                  <h2 className={mainStyles.postHeading}>
                    {title}
                  </h2>
                  <small
                    style={{
                      display: 'block',
                      marginBottom: '0.2rem',
                      marginTop: '-0.3rem',
                      fontSize: '0.9rem',
                    }}
                  >
                    {subtitle}
                  </small>
                </header>
                {thumb}
              </a>
            </article>
          );
        }

        return (
          <article key={node.fields.slug} className={mainStyles.postArticle}>
            <header>
              <h2 className={mainStyles.postHeading}>
                <Link
                  className={mainStyles.postHeadingLink}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h2>
              <small
                style={{
                  display: 'block',
                  marginBottom: '0.2rem',
                  marginTop: '-0.3rem',
                }}
              >
                {node.frontmatter.date}
              </small>
            </header>
            <Link to={node.fields.slug}>
              {thumb}
            </Link>
            <section>
              {!hideDescription &&
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              }
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default PostLinks;
