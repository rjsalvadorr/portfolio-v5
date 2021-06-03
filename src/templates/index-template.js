// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
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
        <nav className="nav-menu">
          <div className="nav-item">
            <img src="https://picsum.photos/96" className="nav-item__img" />
            <span className="nav-item__name">Home</span>
          </div>
          <div className="nav-item">
            <img src="https://picsum.photos/96" className="nav-item__img" />
            <span className="nav-item__name">CV</span>
          </div>
          <div className="nav-item">
            <img src="https://picsum.photos/96" className="nav-item__img" />
            <span className="nav-item__name">Links</span>
          </div>
          <div className="nav-item nav-item--blank"></div>

          {edges.map((edge) =>
            <div className="nav-item" key={edge.node.fields.slug}>
              <img src="https://picsum.photos/96" className="nav-item__img" />
              <span className="nav-item__name">{edge.node.frontmatter.title}</span>
            </div>
          )}
        </nav>
        <main className="main-bontent">
          <header className="page-header">
            header
          </header>
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
