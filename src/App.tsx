import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import { getFields } from 'api/fields';
// import { getTagList } from 'api/tags';
// import { getList } from 'api/data';
import Header from 'components/complex/header';
import Navigation from './components/complex/navigation';
import Dashboard from './components/pages/dashboard';
import Settings from './components/pages/settings';
import * as ROUTES from './constants/routes';
import Input from "./components/ui/input";

interface Props {
  dispatch: any;
  fields: any;
  tags: any;
  filters: any;
  list: any;
}
interface State {
  isAuthenticated: boolean;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isAuthenticated: true,
    };
  }
  async componentDidMount() {
    // await getList();
    // await getFields();
    // await getTagList();
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="layout">app
        <div className="layout__inner">
          {!isAuthenticated && <Navigation />}
          {isAuthenticated && <Header />}
          <div className="layout__main">
            <Input name='input' onChange={(id, value) => console.log(id, value)}/>
            {/*<Switch>
              {/*<Route exact path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SETTINGS}>
                <Settings />
              </Route>
              <Route
                path={ROUTES.HOME}
                render={(props) => {
                  return <Dashboard {...props} />;
                }}
              />
            </Switch>*/}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({
  fields: store.fields,
  tags: store.tags,
  list: store.list,
  filters: store.filters,
});
export default connect(mapStateToProps)(App);
