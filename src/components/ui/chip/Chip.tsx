import React, { PureComponent } from 'react';
import cn from 'classnames';
import './chip.scss';

interface Props {
  text: string;
  isActive: boolean;
  isShowRemove?: boolean;
  onClick: () => void;
}

class Chip extends PureComponent<Props> {
  static defaultProps = {
    isShowRemove: true,
  };
  render() {
    const { text, isActive, isShowRemove, onClick } = this.props;
    return (
      <span
        className={cn('ui-chip', { 'ui-chip_active': isActive })}
        onClick={onClick}
      >
        <span className="ui-chip__text">{text}</span>
        {isShowRemove && <button className="ui-chip__btn">remove</button>}
      </span>
    );
  }
}

export default Chip;
