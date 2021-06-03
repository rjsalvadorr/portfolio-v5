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
  console.debug(data, pageContext);

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <section class="main-container">
        <nav class="nav-menu">
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">obedient chimpanzees</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">shrewd plum</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">resourceful lobster</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">fantastic bear</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">humorous eagle</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">decisive prune</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">receptive fish</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">funny apricots</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">obedient chimpanzees</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">shrewd plum</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">resourceful lobster</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">fantastic bear</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">humorous eagle</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">decisive prune</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">receptive fish</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">funny apricots</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">obedient chimpanzees</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">shrewd plum</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">resourceful lobster</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">fantastic bear</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">humorous eagle</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">decisive prune</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">receptive fish</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">funny apricots</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">obedient chimpanzees</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">shrewd plum</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">resourceful lobster</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">fantastic bear</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">humorous eagle</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">decisive prune</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">receptive fish</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">funny apricots</span>
          </div>
          <div class="nav-item">
            <img src="https://picsum.photos/96" class="nav-item__img" />
            <span class="nav-item__name">receptive fish</span>
          </div>
        </nav>
        <main class="main-bontent">
          <header class="page-header">
            header
          </header>
          main
        </main>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
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
