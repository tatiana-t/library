import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from 'components/complex/navigation';
// import Login from 'components/Login';
// import SignUpPage from 'components/Signup';
import Dashboard from 'components/pages/Dashboard';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';
import * as ROUTES from 'constants/routes';
// import { getBooks } from 'src/api/firebase';
// import { location } from 'react-router-dom';
import 'styles/common/layout.scss';
import 'styles/common/global.scss';
// const App: React.FC = () => {
//   return <div>{Firebase}</div>;
// };
interface State {
  isAuthenicated: boolean;
}

class App extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenicated: true,
    };
  }

  render() {
    const { isAuthenicated } = this.state;

    return (
      <div className="layout">
        <div className="layout__inner">
          <Router>
            {!isAuthenicated && <Navigation />}
            {isAuthenicated && <div className="header">Header</div>}
            <div className="layout__main">
              <Switch>
                {/*<Route exact path={ROUTES.LOGIN} component={Login} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />*/}
                <Route
                  path={ROUTES.HOME}
                  render={(props) => {
                    return <Dashboard {...props} />;
                  }}
                />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
