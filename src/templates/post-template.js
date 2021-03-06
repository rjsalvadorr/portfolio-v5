// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import includes from 'lodash/includes';
import Layout from '../components/Layout';
import Post from '../components/Post';
import NavMenu from '../components/NavMenu';
import MainHeader from '../components/MainHeader';
import MainHero from '../components/MainHero';
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
  const currentPost = data.markdownRemark;
  const imagePaths = currentPost.frontmatter.heroes ? currentPost.frontmatter.heroes.map((imgPath) => `/${imgPath}`) : [];

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <section className="main-container">
        <NavMenu posts={data.allMarkdownRemark.edges} selected={currentPost.fields.slug}/>
        <main className="main-bontent">
          <MainHeader
            title={currentPost.frontmatter.title}
            subtitle={currentPost.frontmatter.subtitle}
            date={currentPost.frontmatter.date}
            category={currentPost.frontmatter.category}
            blurb={currentPost.frontmatter.description}
            hideDate={includes(currentPost.frontmatter.options, 'hideDate')}
          />
          <MainHero paths={imagePaths} />
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
        title
        subtitle
        date
        category
        description
        heroes
        tags
        options
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
            thumbnail
          }
        }
      }
    }
  }
`;

export default PostTemplate;
