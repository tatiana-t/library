import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import { getFields } from 'api/fields';
import Navigation from 'components/complex/navigation';
// import Login from 'components/Login';
// import SignUpPage from 'components/Signup';
import AppContainer from 'components/pages/appContainer';
import Settings from 'components/pages/settings';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';
import * as ROUTES from 'constants/routes';
import { setAvailableFields } from './actions';
import Header from 'components/complex/header';
// import { location } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

interface Props {
  dispatch: any;
  availableFields: any;
}
interface State {
  isAuthenicated: boolean;
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenicated: true,
    };
  }
  async componentDidMount() {
    await this.getFields();
  }

  render() {
    const { isAuthenicated } = this.state;

    return (
      <div className="layout">
        <div className="layout__inner">
          {/*<Router>*/}
          {!isAuthenicated && <Navigation />}
          {isAuthenicated && <Header />}
          <div className="layout__main">
            <Switch>
              {/*<Route exact path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />*/}
              <Route path={ROUTES.SETTINGS}>
                <Settings />
              </Route>
              <Route
                path={ROUTES.HOME}
                render={(props) => {
                  return <AppContainer {...props} />;
                }}
              />
            </Switch>
          </div>
          {/*</Router>*/}
        </div>
      </div>
    );
  }

  async getFields() {
    const { dispatch } = this.props;
    const fields = await getFields();
    const fieldsToState = Object.keys(fields).map((field) => ({
      ...fields[field],
      id: field,
    }));
    dispatch(setAvailableFields(fieldsToState));
  }
}

const mapStateToProps = (store) => ({
  availableFields: store.availableFields,
});
export default connect(mapStateToProps)(App);
