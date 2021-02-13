import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../../components/Layout';
import DynamicGrid from '../../components/visualizations/dynamic-grid';
import vizStyles from '../../styles/visualizations.module.css';

class DynamicGridFeature extends React.Component {
  render () {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className={vizStyles.featureWrapper}>
          <DynamicGrid />
        </div>
      </Layout>
    );
  }
}

export default DynamicGridFeature;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
