// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import NavMenu from '../components/NavMenu';
import MainHeader from '../components/MainHeader';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark, AllMarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
    allMarkdownRemark: AllMarkdownRemark
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  // console.log(data.markdownRemark);
  // console.log(data.allMarkdownRemark);
  const currentPost = data.markdownRemark;

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <section className="main-container">
        <NavMenu posts={data.allMarkdownRemark.edges} selected={currentPost.fields.slug}/>
        <main className="main-bontent">
          <MainHeader
            title={currentPost.frontmatter.title}
            subtitle={currentPost.frontmatter.subtitle}
            blurb="dun knoe fam"
          />
          <Post post={currentPost} />
        </main>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
      }
    }
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

export default PostTemplate;
