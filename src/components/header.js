import React from 'react';
import {Link} from 'gatsby';
import headerStyles from '../styles/header.module.css';
import Burger from '../assets/burger';
import pages from '../data/pages';
import {getPageDataFromSection} from '../utils/page-utils';

class Header extends React.Component {
  constructor (props) {
    super (props);
    this.state = {open: false};
    this.toggleHeader = this.toggleHeader.bind (this);
    this.closeHeader = this.closeHeader.bind (this);
  }

  toggleHeader () {
    const openState = this.state.open;
    this.setState ({open: !openState});
  }

  closeHeader () {
    this.setState ({open: false});
  }

  render () {
    const isOpen = this.state.open;
    let menuClass = headerStyles.headerLinks;
    let headerClass = headerStyles.header;
    let buttonClass = headerStyles.headerButton;
    let overlayClass = headerStyles.headerOverlay;
    let buttonFill = '#ffffff';

    if (isOpen) {
      menuClass = `${headerStyles.headerLinks} ${headerStyles.headerLinksOpen}`;
      headerClass = `${headerStyles.header} ${headerStyles.headerOpen}`;
      buttonClass = `${headerStyles.headerButton} ${headerStyles.headerButtonOpen}`;
      overlayClass = `${headerStyles.headerOverlay} ${headerStyles.headerOverlayOpen}`;
      buttonFill = '#313e5a';
    }

    const currentPage = getPageDataFromSection (this.props.pageName);

    return (
      <div className={headerClass}>
        <div className={headerStyles.headerWrapper}>
          <div className={buttonClass} onClick={this.toggleHeader}>
            <Burger fill={buttonFill} />
          </div>
          <span className={headerStyles.pageName}>
            {currentPage.name}
          </span>
          <div className={menuClass}>
            <div className={headerStyles.linksWrapper}>
              {pages.map (page => {
                return (
                  <div key={page.id} className={headerStyles.headerLink}>
                    <Link style={{boxShadow: `none`}} to={page.path}>
                      <span>{page.name}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {<div className={overlayClass} onClick={this.closeHeader} />}
      </div>
    );
  }
}

export default Header;
