import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../../components/Layout';
import BrokenGrid from '../../components/visualizations/broken-grid';
import vizStyles from '../../styles/visualizations.module.css';

class BrokenGridFeature extends React.Component {
  render () {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className={vizStyles.featureWrapper}>
          <BrokenGrid />
        </div>
      </Layout>
    );
  }
}

export default BrokenGridFeature;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
