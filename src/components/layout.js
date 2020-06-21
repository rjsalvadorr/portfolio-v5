import React from 'react';
import {rhythm} from '../utils/typography';
import Header from './header';
import mainStyles from '../styles/main.module.css';
import {getSection} from '../utils/page-utils';

class Layout extends React.Component {
  render () {
    const {location, children} = this.props;

    return (
      <div className={mainStyles.mainLayout}>
        <header>
          <Header pageName={getSection(location)} />
        </header>
        <div
          className={mainStyles.mainLayoutWrapper}
          style={{
            padding: `${rhythm (1)} ${rhythm (3 / 4)}`,
          }}
        >
          <main className="main-layout__content">{children}</main>
          <footer className={mainStyles.footer}>
            <small className={mainStyles.footerSmall}>
              © {new Date ().getFullYear ()} Randolph J. Salvador
              <br/>
              <span style={{textTransform: 'none'}}>
                Built with
                {` `}
                <a href="https://www.gatsbyjs.org">GatsbyJS</a>
              </span>
            </small>
          </footer>
        </div>
      </div>
    );
  }
}

export default Layout;
