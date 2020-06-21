/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import mainStyles from "../styles/main.module.css"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      className={mainStyles.bio}
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
        borderTop: '1px solid #888888',
        borderBottom: '1px solid #888888',
        paddingTop: rhythm(0.75),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
          boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.33)',
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p className={mainStyles.bioText} style={{marginBottom: rhythm(0.75)}}>
        <strong>RJ</strong> devs and plays tunes in Toronto.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>Tweet</a>
        {` `}
        at him if you like, or check him out on
        {` `}
        <a href={`https://instagram.com/${social.instagram}`}>
          Instagram.
        </a>
      </p>
    </div>
  )
}

export default Bio
