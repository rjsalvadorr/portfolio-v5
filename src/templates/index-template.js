// @flow strict
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import NavMenu from '../components/NavMenu';
import MainHeader from '../components/MainHeader';
import MainHero from '../components/MainHero';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { edges } = data.allMarkdownRemark;
  console.debug(data, pageContext, edges.map((edge) => edge.node));
  const imagePaths = [
    '/media/biz-1.jpg',
  ]

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <section className="main-container">
        <NavMenu posts={edges} isIndex={true} />
        <main className="main-bontent">
          <MainHeader title="R. J. Salvador" category="Web Developer" isIndex />
          <MainHero paths={imagePaths} />
          <div className="index-bontent">
            <p>
              Hi, I'm a software developer with 6 years of experience in the web-dev industry. 
              Currently, I'm transitioning into a career in architecture technology, but 
              I'm generally available for part-time software work or small contracts.<br />
              Feel free to check out my <a href="/rj-salvador-resume-2021-06.pdf" target="_blank">resume</a> for more 
              details. If you'd like to get in touch, drop me a line at <Link to="https://www.linkedin.com/in/rjsalvadorr/">LinkedIn</Link>
            </p>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            thumbnail
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
