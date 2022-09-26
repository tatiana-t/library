import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import * as ROUTES from 'constants/routes';
// import SignUpPage from 'components/Signup';
import './navigation.scss';

class Navigation extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <ul>
          {/*<li>*/}
          {/*  <Link to={ROUTES.LOGIN}>Sign In</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to={ROUTES.SIGN_UP}>Sign Up</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to={ROUTES.ACCOUNT}>Account</Link>*/}
          {/*</li>*/}
          <li>
            <NavLink
              // activeClassName="navigation__item_active"
              to={ROUTES.SETTINGS}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
