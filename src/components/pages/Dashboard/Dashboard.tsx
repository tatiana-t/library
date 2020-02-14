import React, { Component } from 'react';
// import connect from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

interface Props {
  firebase: any;
}
class Dashboard extends Component<Props> {
  render() {
    console.log(this.props.firebase);
    const { firebase } = this.props;
    const data = firebase.ref('/').once();
    console.log(data);
    return <div></div>;
  }
}
export default withFirebase(Dashboard);
