import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'helpers/withRouter';
import Logo from 'components/ui/logo';
import Navigation from '../navigation';
import * as ROUTES from 'constants/routes';
import './header.scss';

class Header extends PureComponent<any> {
  render() {
    // const {
    //   history: {
    //     location: { pathname },
    //   },
    // } = this.props;
    return (
      <div className="header">
        <Link className="header__item header__item_logo" to={ROUTES.HOME}>
          <Logo />
        </Link>
        {/*<div className="header__item">*/}
        {/*  {pathname === '/' ? 'Unicornlib' : pathname}*/}
        {/*</div>*/}
        <div className="header__item">
          <Navigation />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
