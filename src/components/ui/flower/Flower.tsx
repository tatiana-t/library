import React, { PureComponent } from 'react';
import './flower.scss';

interface Props {}

class Flower extends PureComponent<Props> {
  static defaultProps = {
    isShowRemove: true
  };
  render() {
    return <div className="flower"></div>;
  }
}

export default Flower;
