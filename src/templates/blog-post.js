import React from 'react';
import {Link, graphql} from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {rhythm, scale} from '../utils/typography';
import mainStyles from '../styles/main.module.css';
import {getPageDataFromLocation} from '../utils/page-utils';

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const categoryPage = getPageDataFromLocation (this.props.location);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className={mainStyles.blogPostArticle}>
          <header>
            <h1 className={mainStyles.postHeading}>
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale (-1 / 5),
                display: `block`,
                marginBottom: rhythm (1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{__html: post.html}} />
          <p>
            Back to <Link to={categoryPage.path}>{categoryPage.name}</Link>.
          </p>
          <footer>
            <Bio />
          </footer>
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
