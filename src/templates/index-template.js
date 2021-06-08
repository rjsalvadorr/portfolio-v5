// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import NavMenu from '../components/NavMenu';
import MainHeader from '../components/MainHeader';
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

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <section className="main-container">
        <NavMenu posts={edges} />
        <main className="main-bontent">
          <MainHeader title="R. J. Salvador" subtitle="Web Developer, Musician" />
          main
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
