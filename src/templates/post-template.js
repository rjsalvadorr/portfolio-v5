// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';
import bgVid04 from '../assets/vid/bg4.mp4';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription = '' } = frontmatter;
  const metaDescription = postDescription || siteSubtitle;
  const socialImageUrl = '';

  return (
    <Layout title={`${postTitle} | ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
      <div className="main-background">
        <video className="background-video" autoPlay playsInline loop muted>
          <source src={bgVid04} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div className="main-content">
        <Sidebar />
        <Post post={data.markdownRemark} />
      </div>
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
  }
`;

export default PostTemplate;
