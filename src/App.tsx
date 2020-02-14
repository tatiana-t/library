import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from 'components/Navigation';
import Login from 'components/Login';
import SignUpPage from 'components/Signup';
import Dashboard from 'components/pages/Dashboard';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';
import * as ROUTES from 'constants/routes';
// import { getBooks } from 'src/api/firebase';
import 'styles/common/layout.scss';
import 'styles/common/global.scss';
// const App: React.FC = () => {
//   return <div>{Firebase}</div>;
// };

class App extends Component {
  render() {
    // console.log(this);
    return (
      <div className="layout">
        <div className="layout__inner">
          <Router>
            <Navigation />

            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.HOME} component={Dashboard} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
