import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render () {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div style={{textAlign: 'center'}}>
          <h1>Page Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist.</p>
          <p style={{fontSize: '4rem'}}>:(</p>
          <p>
            Back to <Link to="/">Home</Link>.
          </p>
          <hr />
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
