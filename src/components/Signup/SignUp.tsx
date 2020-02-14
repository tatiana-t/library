import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import { useSelector } from 'react-redux';
import firebase, { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
// import firebase from 'firebase/app';
import Input from 'components/ui/input';
import './sign-up.scss';
interface Props {
  dispatch: any;
  auth?: any;
  profile?: any;
  firebase: any;
}
interface State {
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  error: null | { message: string };
  login: string;
  password: number | string;
}

// const INITIAL_STATE = {
//   username: '',
//   email: '',
//   passwordOne: '',
//   passwordTwo: '',
//   error: null
// };

class SignUpPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    //wtf?!
    super(props);

    this.state = {
      username: 'qwer',
      email: 'asdf',
      passwordOne: '123',
      passwordTwo: '123',
      error: null,
      login: 'zxcv',
      password: 'xcvb'
    };
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    return (
      <form onSubmit={this.onSubmit} className="sign-up">
        sign Up <hr />
        <div className="sign-up__item">
          <Input onChange={this.onChange} name="username" label="Username" />
        </div>
        <div className="sign-up__item">
          <Input onChange={this.onChange} name="email" label="Email" />
        </div>
        <div className="sign-up__item">
          <Input onChange={this.onChange} name="passwordOne" label="Password" />
        </div>
        <div className="sign-up__item">
          <Input
            onChange={this.onChange}
            name="passwordTwo"
            label="Repeat password"
          />
        </div>
        <div className="sign-up__item">
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>
        </div>
        {error && <p>{error.message}</p>}
        <Login />
      </form>
    );
  }
  setInitialState = () => {
    this.setState({
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
      login: '',
      password: ''
    });
  };
  onSubmit = (event: any) => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;
    // console.log(firebase);
    // console.log('submit');
    const { dispatch } = this.props;
    dispatch({ type: 'REGISTER', payload: this.state });
  };
  setValue = (key: keyof State, value: string) => {
    this.setState(
      prevState => ({ ...prevState, [key]: value } as Pick<State, keyof State>)
    );
  };
  onChange = (name: any, value: any) => {
    this.setValue(name, value);
  };
  login = () => {
    const firebase = useFirebase();
    const auth = useSelector((state: any) => state.firebase.auth);

    return firebase.login({ provider: 'google', type: 'popup' });
  };
}
function Login() {
  const firebase = useFirebase();
  const auth = useSelector((state: any) => state.firebase.auth);

  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' });
  }
  return <button onClick={loginWithGoogle}>Login With Google</button>;
}
// const enhance = connect(
//   // Map redux state to component props
//   ({ firebase: { auth, profile } }) => ({
//     auth,
//     profile
//   })
// )
interface Auth {
  auth: any;
  profile: any;
}
const mapStateToProps = (state: any) => {
  console.log(state);
  const { firebase } = state;
  const props = {
    firebase
  };
  return props;
};

export default connect(mapStateToProps)(SignUpPage);
