import React, { PureComponent } from 'react';
import './scroll.scss';

class Scroll extends PureComponent {
  render() {
    return (
      <div className="ui-scroll">
        <div className="ui-scroll__inner">{''}</div>
      </div>
    );
  }
}
export default Scroll;
