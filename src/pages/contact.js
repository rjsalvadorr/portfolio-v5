import React from 'react';
import {graphql} from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import emailIcon from '../assets/mail-dark.svg';
import linkedInIcon from '../assets/linkedin-dark.svg';
import githubIcon from '../assets/github-dark.svg';
import contactStyles from '../styles/contact.module.css';

class ContactPage extends React.Component {
  render () {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className={contactStyles.contactWrapper}>
          <SEO title="Contact page" />
          <p className={contactStyles.contactGroup}>
            <img
              className={contactStyles.contactIcon}
              src={emailIcon}
              alt="github icon"
            />
            <a
              className={contactStyles.contactLink}
              href="mailto:randolph.salvador@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              randolph.salvador@gmail.com
            </a>
          </p>
          <p className={contactStyles.contactGroup}>
            <img
              className={contactStyles.contactIcon}
              src={linkedInIcon}
              alt="github icon"
            />
            <a
              className={contactStyles.contactLink}
              href="https://www.linkedin.com/in/randolphsalvador/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/rjsalvadorr/
            </a>
          </p>
          <p className={contactStyles.contactGroup}>
            <img
              className={contactStyles.contactIcon}
              src={githubIcon}
              alt="github icon"
            />
            <a
              className={contactStyles.contactLink}
              href="https://github.com/rjsalvadorr"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/rjsalvadorr
            </a>
          </p>
        </div>
        <Bio />
      </Layout>
    );
  }
}

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
