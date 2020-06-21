import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import visualPostLinks from '../data/visuals';
import PostLinks from "../components/postlinks";
import mainStyles from '../styles/main.module.css';

class CodePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Software posts" />
        <p className={mainStyles.categoryIntro}>
          Hey, I'm a web developer based in Toronto, with about five years of pro dev experience.
          Currently, I'm doing a lot of work with ReactJS, VueJS, and modern JS tools.
          I typically catch up with new tech by playing around in personal projects (see below).
        </p>
        
        <PostLinks posts={posts} customPosts={visualPostLinks} />
        <Bio />
      </Layout>
    )
  }
}

export default CodePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {category: {eq: "software"}} }
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
            options
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
