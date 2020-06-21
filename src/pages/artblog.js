import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLinks from "../components/postlinks";
import mainStyles from '../styles/main.module.css';

class ArtBlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Art/blog posts" />
        <p className={mainStyles.categoryIntro}>
          I used to make lots of visual art in my teen years.
          Every now and then, I rediscover the joy of art-ing and cook up a painting or two.
        </p>
        <PostLinks posts={posts} />
        <Bio />
      </Layout>
    )
  }
}

export default ArtBlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {category: {nin: ["software", "music"]}} }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            subtitle
            type
            target_url
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
