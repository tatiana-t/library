import React, { PureComponent } from 'react';
import './item.scss';
import cn from 'classnames';

interface Props {
  name: string;
  author: string;
  year: string;
  tags: [];
  id: string;
  setActive: (id: string) => void;
  customClass?: string;
}

class Item extends PureComponent<Props> {
  render() {
    const { id, name, author, year, customClass, setActive } = this.props;
    return (
      <div onClick={() => setActive(id)} className={cn('item', customClass)}>
        <div className="item__content">
          {author && <div className="item__sub">{author}</div>}
          {name && <div className="item__title">{name}</div>}
          {year && <div className="item__text">{year}</div>}
        </div>
      </div>
    );
  }
}
export default Item;
