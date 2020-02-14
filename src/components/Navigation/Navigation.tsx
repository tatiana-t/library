import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from 'constants/routes';
// import SignUpPage from 'components/Signup';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={ROUTES.LOGIN}>Sign In</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
