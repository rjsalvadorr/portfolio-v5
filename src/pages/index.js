import React from "react"
import { Link, graphql } from "gatsby"

import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"
import homeStyles from "../styles/home.module.css"
import pages from '../data/pages';

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <HomeLayout location={this.props.location} title={siteTitle}>
        <SEO title="Homepage" />
        {pages.map (page => {
          if (page.section !== 'home') {
            return (
              <Link key={page.id} to={page.path}>
                <div className="home-link-wrapper">
                  <h2 className={homeStyles.link}>{page.name}</h2>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </HomeLayout>
    )
  }
}

export default HomePage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
